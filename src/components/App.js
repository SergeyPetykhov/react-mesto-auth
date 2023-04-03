import api from '../utils/api'
import apiAuth from '../utils/apiAuth';
import React from 'react';
import Main from './Main.js';
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import DeletePlacePopup from './DeletePlacePopup.js';
import RegistrationSuccessPopup from './RegistrationSuccessPopup.js';
import RegistrationFailurePopup from './RegistrationFailurePopup.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import Register from './Register.js';
import Login from './Login.js';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.js'
import Error404 from './error404.js';

function App() {
  const navigate = useNavigate();
  const [userData, setUserData] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [cardToBeDeleted, setCardToBeDeleted] = React.useState({});
  const [selectedCard, setSelectedCard] = React.useState(null);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditAvatarPopupLoading, setIsEditAvatarPopupLoading] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditProfilePopupLoading, setIsEditProfilePopupLoading] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isAddPlacePopupLoading, setIsAddPlacePopupLoading] = React.useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);
  const [isDeletePopupLoading, setIsDeletePopupLoading] = React.useState(false);
  const [isRegistrationSuccessPopupOpen, setIsRegistrationSuccessPopupOpen] = React.useState(false);
  const [isRegistrationFailurePopupOpen, setIsRegistrationFailurePopupOpen] = React.useState(false);

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userRegData, setUserRegData] = React.useState({});
  const [userAuthData, setUserAuthData] = React.useState({});
  const [isRegisterLoading, setIsRegisterLoading] = React.useState(false);
  const [isLoginLoading, setIsLoginLoading] = React.useState(false);

  React.useEffect(() => {
    checkToken();
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getUserData(), api.getInitialCards()])
        .then(([userData, cards]) => {
          setUserData(userData);
          setCards(cards);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [loggedIn]);

  const checkToken = () => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      apiAuth.getToken(jwt)
        .then((res) => {
          if (res) {
            setUserAuthData(res.data);
            setLoggedIn(true);
            navigate("/", { replace: true });
          }
        })
    }
  }

  const signOut = () => {
    localStorage.removeItem('jwt');
    setLoggedIn(false)
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddCardClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleDeleteCardClick = (card) => {
    setIsDeletePopupOpen(true);
    setCardToBeDeleted(card);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const handleCardLikeClick = (card) => {
    const isLiked = card.likes.some(i => i._id === userData._id);

    if (!isLiked) {
      api.likeCard(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else {
      api.dislikeCard(card._id)
        .then((newCard) => {
          setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const handleCardDeleteSubmitButtonClick = () => {
    setIsDeletePopupLoading(true);
    api.deleteCard(cardToBeDeleted._id)
      .then(() => {
        setCards((cards) => cards.filter(c => c._id !== cardToBeDeleted._id));
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsDeletePopupLoading(false);
      });
  }

  const handleUpdateUser = (newUserData) => {
    setIsEditProfilePopupLoading(true);
    api.updateUserData(newUserData)
      .then((res) => {
        setUserData(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsEditProfilePopupLoading(false);
      });
  }

  const handleUpdateAvatar = (newLink) => {
    setIsEditAvatarPopupLoading(true);
    api.updateUserAvatar(newLink)
      .then((res) => {
        setUserData(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsEditAvatarPopupLoading(false);
      });
  }

  const handleAddCard = (newImageData) => {
    setIsAddPlacePopupLoading(true);
    api.postNewCard(newImageData)
      .then((res) => {
        setCards([res, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsAddPlacePopupLoading(false);
      });
  }

  /* user authentification*/

  const handleRegisrtationUser = (registrationData) => {
    setIsRegisterLoading(true);
    apiAuth.registrationUser(registrationData)
      .then((res) => {
        setUserRegData(res);
        setIsRegistrationSuccessPopupOpen(true);
      })
      .catch((err) => {
        console.log(err);
        setIsRegistrationFailurePopupOpen(true);
      })
      .finally(() => {
        setIsRegisterLoading(false);
      });
  }

  const handleAuthorizationUser = (authorizationData) => {
    setIsLoginLoading(true);
    apiAuth.authorizationUser(authorizationData)
      .then((res) => {
        localStorage.setItem('jwt', res.token)
        setUserAuthData(authorizationData);
        setLoggedIn(true);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setIsRegistrationFailurePopupOpen(true);
      })
      .finally(() => {
        setIsLoginLoading(false);
      });
  }

  const closeRegistrationSuccessPopup = () => {
    setIsRegistrationSuccessPopupOpen(false);
    navigate("/signin", { replace: true });
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeletePopupOpen(false);
    setIsRegistrationFailurePopupOpen(false)
    setSelectedCard(null);
  }

  return (
    <CurrentUserContext.Provider value={userData}>
      <Routes>

        <Route
          path="/"
          element={<ProtectedRoute
            Component={Main}
            loggedIn={loggedIn}
            signOut={signOut}
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddCardClick}
            onCardClick={handleCardClick}
            onCardLikeClick={handleCardLikeClick}
            onCardDeleteButtonClick={handleDeleteCardClick}
            cards={cards}
            userAuthData={userAuthData}
          />}
        />

        <Route
          path="/signup"
          element={<Register isLoading={isRegisterLoading} onRegistrationUser={handleRegisrtationUser} />}
        />

        <Route
          path="/signin"
          element={<Login isLoading={isLoginLoading} onAuthorizationUser={handleAuthorizationUser} />}
        />
        <Route
          path="*"
          element={<Error404 />}
        />
      </Routes>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        isLoading={isEditAvatarPopupLoading}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        isLoading={isEditProfilePopupLoading}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />

      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        isLoading={isAddPlacePopupLoading}
        onClose={closeAllPopups}
        onAddPlace={handleAddCard}
      />

      <DeletePlacePopup
        isOpen={isDeletePopupOpen}
        isLoading={isDeletePopupLoading}
        onClose={closeAllPopups}
        onCardDeleteSubmitButtonClick={handleCardDeleteSubmitButtonClick}
      />

      <RegistrationSuccessPopup
        isOpen={isRegistrationSuccessPopupOpen}
        onClose={closeRegistrationSuccessPopup}
      />

      <RegistrationFailurePopup
        isOpen={isRegistrationFailurePopupOpen}
        onClose={closeAllPopups}
      />

    </CurrentUserContext.Provider>
  );
}

export default App;
