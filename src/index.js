import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import './i18n'
import './index.css'
import App from './App'

import { ResumeUniqueIdProvider } from './contexts/ResumeUniqueIdContext'
import { ResumeListProvider } from './contexts/ResumeListContext'
import { ResumeListDeletedProvider } from './contexts/ResumeListDeletedContext'
import { ResumeProvider } from './contexts/ResumeContext'

ReactDOM.render(
  <HashRouter>
    <ResumeUniqueIdProvider>
      <ResumeListProvider>
        <ResumeListDeletedProvider>
          <ResumeProvider>
            <App />
          </ResumeProvider>
        </ResumeListDeletedProvider>
      </ResumeListProvider>
    </ResumeUniqueIdProvider>
  </HashRouter>,
  document.getElementById('root')
)
