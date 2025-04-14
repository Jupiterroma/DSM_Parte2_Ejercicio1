import React, { Component } from 'react';
import { EXCURSIONES } from '../comun/excursiones';
import { Text, View, ScrollView, FlatList} from 'react-native'; 
import { COMENTARIOS } from '../comun/comentarios'; 
import { Card, Icon } from '@rneui/themed'; 

function RenderComentario(props) { 
    const comentarios = props.comentarios; 
    return ( 
    <Card> 
    <Card.Title>Comentarios</Card.Title> 
    <Card.Divider/> 
    [... renderizar aquí el contenido de los comentarios ...] 
    </Card> 

    ); 
}

function RenderExcursion(props) {

    const excursion = props.excursion;
    
        if (excursion != null) {
            return(
            <Card>
              <Card.Title>{excursion.nombre}</Card.Title>
              <Card.Divider/>
              <Card.Image source={require('./imagenes/40Años.png')}></Card.Image>
              <Text style={{margin: 20}}>
                {excursion.descripcion}
              </Text>
              <Icon 
                raised 
                reverse 
                name={ props.favorita ? 'heart' : 'heart-o'} 
                type='font-awesome' 
                color='#f50' 
                onPress={() => props.favorita ? console.log('La excursión ya se encuentra entre las favoritas') : props.onPress()} 
                />
            </Card>
            );
        }
        else {
            return(<View></View>);
        }
}

class DetalleExcursion extends Component {
        constructor(props) { 
            super(props);
            this.state = {
                favoritos: [],
                excursiones: EXCURSIONES,
                comentarios: COMENTARIOS
            };
        }
        marcarFavorito(excursionId) { 
            this.setState({favoritos: this.state.favoritos.concat(excursionId)}); 
        }
        render(){ 
            const {excursionId} = this.props.route.params; 
            return( 
                <ScrollView> 
                    <RenderExcursion 
                        excursion={this.state.excursiones[+excursionId]} 
                        favorita={this.state.favoritos.some(el => el === excursionId)} 
                        onPress={() => this.marcarFavorito(excursionId)} 
                    />  
                    <RenderComentario 
                        comentarios={this.state.comentarios.filter((comentario) => comentario.excursionId === excursionId)} 
                    /> 
                </ScrollView> 
            ); 
        }

}

export default DetalleExcursion;