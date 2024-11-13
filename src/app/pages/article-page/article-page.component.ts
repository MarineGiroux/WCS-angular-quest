import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../../models/article.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private apiService = inject(ApiService);
  article$!: Observable<Article>;
  articleId!: number;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
      this.article$ = this.apiService.getArticleById(this.articleId);
    });
  }
}
