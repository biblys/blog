import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-primary text-white border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-2xl lg:text-[1.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Biblys est un outil e-commerce à destination des éditeurs indépendants,
            qui leur permet de vendre en ligne des livres papiers et
            numériques sans aucun connaissance technique.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://www.biblys.fr"
              className="mx-3 bg-white hover:bg-black hover:text-white text-black font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              En savoir plus
            </a>
            <a
              href="https://www.biblys.fr/contact/"
              className="mx-3 font-bold hover:underline"
            >
              Contact
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
