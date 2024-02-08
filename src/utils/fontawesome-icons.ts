/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faCaretDown, faMagnifyingGlass);

export default FontAwesomeIcon;