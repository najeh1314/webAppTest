import { Component} from "@angular/core";

@Component({
    selector:'app-product',
    templateUrl:'./product.html',
    styleUrl:'./product.css'
})
export class Product{

    products: Array<any> = [
        {src:"../assets/images/pc.jpg", cardTitle:"Computer", cardTxt:"here you read about our product, it is a braef descreption for it. Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les structures propres à une langue. Un texte n'a pas de longueur déterminée sauf dans le cas de poèmes à forme fixe comme le sonnet ou le haïku", cardTxtSmall:"This is an electronic device product!"},
        {src:"../assets/images/ordinateurBureau.jpg", cardTitle:"Ordinateur de bureau", cardTxt:"here you read about our product, it is a braef descreption for it. Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les structures propres à une langue. Un texte n'a pas de longueur déterminée sauf dans le cas de poèmes à forme fixe comme le sonnet ou le haïku", cardTxtSmall:"This is an electronic device product!"},
        {src:"../assets/images/accessoires.jpg", cardTitle:"Computer", cardTxt:"here you read about our product, it is a braef descreption for it. Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les structures propres à une langue. Un texte n'a pas de longueur déterminée sauf dans le cas de poèmes à forme fixe comme le sonnet ou le haïku", cardTxtSmall:"This is an electronic device product!"},
        {src:"../assets/images/pc.jpg", cardTitle:"Computer", cardTxt:"here you read about our product, it is a braef descreption for it. Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les structures propres à une langue. Un texte n'a pas de longueur déterminée sauf dans le cas de poèmes à forme fixe comme le sonnet ou le haïku", cardTxtSmall:"This is an electronic device product!"},
        {src:"../assets/images/smartphone.jpg", cardTitle:"Smart Phone", cardTxt:"here you read about our product, it is a braef descreption for it. Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les structures propres à une langue. Un texte n'a pas de longueur déterminée sauf dans le cas de poèmes à forme fixe comme le sonnet ou le haïku", cardTxtSmall:"This is an electronic device product!"}
    ]
}