import Header from './Header/Header.js';
import HeaderLoggedOut from './HeaderLoggedOut/HeaderLoggedOut.js';
import Promo from './Promo/Promo.js';
import AboutProject from './AboutProject/AboutProject.js';
import Techs from './Techs/Techs.js';
import Preloader from './Preloader/Preloader';
import AboutMe from './AboutMe/AboutMe';
import mePhoto from '../images/qZDBUFbEESc — копия.jpg';
import Footer from './Footer/Footer.js';
import Main from './Main/Main.js';
import Auth from './Auth/Auth.js';
import AuthForm from './AuthForm/AuthForm.js';
import NotFound from './NotFound/NotFound.js';
import HeaderLoggedIn from './HeaderLoggedIn/HeaderLoggedIn.js';
import Movies from './Movies/Movies.js';
import SearchBtn from '../images/Search-Btn.svg';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox.js';
import SearchForm from './SearchForm/SearchForm.js';
import MoviesCardList from './MoviesCardList/MoviesCardList.js';
import MoviesCard from './MoviesCard/MoviesCard.js';
import Profile from './Profile/Profile.js';
import SavedMovies from './SavedMovies/SavedMovies.js';
import logo from '../images/logo.svg';
import burger from '../images/burgerNotOpened.svg';
import close from '../images/Group.svg';
import ContextMenu from './ContextMenu/ContextMenu.js';
import { technologies } from '../utils/consts';
import { sitesPortfolio } from '../utils/consts';
import { getVisibleMoviesCount } from '../utils/helpers.js';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute.js';
import { authorize } from '../Api/Auth';
import { register } from '../Api/Auth';
import { checkTokenValidity } from '../Api/Auth';
import UserContext from '../contexts/UserContext.js';
import ExistingCardsContext from '../contexts/ExistingCardsContext.js';
import { userService } from '../Api/UserService.js';
import { cardService } from '../Api/CardService.js';
import { validateEmail } from '../utils/formValidators.js';
import { validatePassword } from '../utils/formValidators.js';
import { validateName } from '../utils/formValidators.js';
import { convertMinToHrsAndMin, prepearingCard, openTrailerLink } from '../utils/helpers.js';
import Popup from './Popup/Popup.js';

export {
  getVisibleMoviesCount,
  Popup,
  ExistingCardsContext,
  prepearingCard,
  convertMinToHrsAndMin,
  openTrailerLink,
  validateEmail,
  validatePassword,
  validateName,
  Header,
  HeaderLoggedOut,
  Promo,
  AboutProject,
  Techs,
  technologies,
  Preloader,
  AboutMe,
  mePhoto,
  Footer,
  Main,
  Auth,
  AuthForm,
  NotFound,
  HeaderLoggedIn,
  Movies,
  SearchBtn,
  FilterCheckbox,
  SearchForm,
  MoviesCardList,
  MoviesCard,
  Profile,
  SavedMovies,
  logo,
  burger,
  close,
  ContextMenu,
  sitesPortfolio,
  ProtectedRoute,
  authorize,
  register,
  checkTokenValidity,
  UserContext,
  userService,
  cardService,
};
