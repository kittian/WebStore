import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
  } from "react-router-dom";
import { CategoriasScreen } from '../components/categorias/CategoriasScreen';
import { GruposScreen } from '../components/grupos/GruposScreen';


import { Home } from '../components/Home';
import { NosotrosScreen } from '../components/nosotros/NosotrosScreen';
import { ProductosScreen } from '../components/productos/ProductosScreen';
import { UbicacionesScreen } from '../components/ubicaciones/UbicacionesScreen';
import { Footer } from '../components/ui/Footer';
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <div className="container mt-2">
                    <Switch>
                        <Route exact path="/" component={ Home } />
                        <Route exact path="/grupos" component={ GruposScreen } />
                        <Route exact path="/productos" component={ ProductosScreen } />
                        <Route exact path="/categorias" component={ CategoriasScreen } />
                        <Route exact path="/ubicaciones" component={ UbicacionesScreen } />
                        <Route exact path="/nosotros" component={ NosotrosScreen } />                      
                        <Redirect to="/"/>
                    </Switch>
            </div>
            <Footer />
        </Router>
    )
}
