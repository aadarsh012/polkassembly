import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@xstyled/styled-components'
import 'semantic-ui-css/semantic.min.css'
import '../../config/theme/fonts.css'
import {GlobalStyle} from "../ui-components/GlobalStyle"
import {theme} from "../../../front-end/src/themes/theme"
import {NotificationProvider} from "../context/NotificationContext";
import {ModalProvider} from "../context/ModalContext";
import {UserDetailsProvider} from "../context/UserDetailsContext";
import Apollo from '../components/Apollo';
import Notifications from '../components/Notifications';
import Modal from "../components/Modal";
import {ApiContextProvider} from "../context/ApiContext";
import { Container } from 'semantic-ui-react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={theme}>
          <NotificationProvider>
              <ModalProvider>
                  <UserDetailsProvider>
                      <Apollo>
                          <GlobalStyle />
                          <Notifications/>
                          <Modal/>
                          <ApiContextProvider>
                              <div id='page-container'>
                                  <Container>
                                    <Component {...pageProps} />
                                  </Container>
                              </div>
                          </ApiContextProvider>
                      </Apollo>
                  </UserDetailsProvider>
              </ModalProvider>
          </NotificationProvider>
      </ThemeProvider>
  )
}

export default MyApp
