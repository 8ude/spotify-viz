//commented out in order to locate three.js point of failure

//Corey's note - auth is necessary to
import { auth } from './classes/sync'

import Template from './template'
import Example from './example'

if (window.location.hash === '#start') {
   const template = new Template()
   //const example = new Example()
} else {
  auth()
}
