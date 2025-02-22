// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import { VNumberInput,  } from 'vuetify/labs/VNumberInput'
import { VDateInput  } from 'vuetify/labs/VDateInput'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({ components: {
    VNumberInput,
    VDateInput
  },
  theme: {
    defaultTheme: 'dark',
  },
    // ... your configuration
  })
  app.vueApp.use(vuetify)
})