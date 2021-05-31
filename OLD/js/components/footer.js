class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
        footer {
          height: 70px;
          padding-block-start: 15px;
          list-style: none;
          display: flex;
          flex: 0 0 auto;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          position:absolute;
          bottom: 0;
          line-height: 120%;
        }
          
      
        
        ul li {
          list-style: none;
          display: inline;
        }
        
        a {
          margin: 0 15px;
          color: white;
          text-decoration: none;
        }
        
        a:hover {
          padding-bottom: 5px;
          box-shadow: inset 0 -2px 0 0 #333;
        }
        
        .social-row {
          font-size: 20px;
        }
        
        .social-row li a {
          margin: 0 15px;
        }

        .copyright{
          color               : #C7C7C7;
        }
      
      .copyright a{
          text-decoration     : none;
          color               : white;
          /* font-weight      : bold; */
          /* padding-inline-end: 0.5rem; */
          padding-inline-end: 30px;
      }
      
        </style>
        <footer class="bg-dark">
          <ul>
            <li><a href="/WebStore/view/version/app.html">About</a></li>
            <li><a href="https://documenter.getpostman.com/view/9034494/TzJpjL63">Documentacion</a></li>
            <li><a href="/WebStore/view/nosotros/nosotros.html">Nosotros</a></li>
          </ul>
          <div class="copyright">
            © Derechos Reservados | <a href="https://impulsandonegocios.cl">ImpulsandoNegocios</a>
          </div>
        </footer>

        <script type="text/javascript">

          copyright = new Date();
          update    = copyright.getFullYear();
          document.write("© 2021 - " + update + " " + "https://impulsandonegocios.cl");

        </script>
      `;
    }
}

customElements.define('footer-component', Footer);