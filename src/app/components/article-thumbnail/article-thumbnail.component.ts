import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Article } from '../../models/article.model';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-article-thumbnail',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './article-thumbnail.component.html',
  styleUrl: './article-thumbnail.component.scss'
})
export class ArticleThumbnailComponent {
  @Input() article!: Article;
  @Output() notifyLike: EventEmitter<Article> = new EventEmitter();

  sendNotification() {
    this.notifyLike.emit(this.article);
  }
}
