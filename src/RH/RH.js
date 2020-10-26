import React from "react";

import '../index.css';
import Separator from '../Separator/Separator'
import './RH.css'



function RH(props) {
    return (
        <React.Fragment>
            <Separator value="RH"/>
            <div>
                <p className="text blocRh">
                    Tout juste diplômé d'une école d'ingénieur en informatique, je recherche un emploi de développeur
                    fullstack dans une entreprise à taille humaine. <br/>
                    En effet ,le monde de la start-up me plaît énormément, j'en ai moi-même cofondée une durant ma
                    scolarité.
                    <br/><br/>
                    Passionné d'informatique, je m'intéresse à toutes les parties d'une application (front, back et
                    BDD) mais également à son intégration et son déploiement (docker, jenkins,...)<br/>
                    Développer un code de qualité est une priorité pour moi, c'est la raison pour laquelle je
                    m'intéresse aux bonnes pratiques (clean code, code review, TDD, pair/mob programming ...)<br/>
                    Intéressé par les nouvelles technologies et frameworks, je fais régulièrement de la veille.
                    <br/><br/>
                    Autonome, je suis capable de rapidement monter en compétences.
                </p>
            </div>
        </React.Fragment>
    )
}

export default RH;