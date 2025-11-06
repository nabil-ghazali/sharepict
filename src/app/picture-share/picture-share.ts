import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-share',
  imports: [],
  templateUrl: './picture-share.html',
  styleUrl: './picture-share.scss',
})
export class PictureShare implements OnInit {
  title!: string;
  description!: string;
  createdAt!: Date;
  likes!: number;
  imgUrl!: string;

  ngOnInit(): void {
    this.title= 'Conan';
    this.description= 'Lhomme le plus barbare';
    this.createdAt= new Date();
    this.likes= 0;
    this.imgUrl = "https://fr.web.img2.acsta.net/medias/nmedia/18/36/15/90/18456579.jpg"
  }

}
