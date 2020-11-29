import './styles/application.css';
import 'bootstrap'
import App from 'components/app';

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.start();
});
