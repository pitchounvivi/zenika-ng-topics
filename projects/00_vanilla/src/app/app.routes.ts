import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { userPostsResolver } from './user-posts/user-posts.resolver';
import { UserPostsService } from './user-posts/user-posts.service';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'user/:userId',
    component: UserPostsComponent,
    resolve: { user: userPostsResolver },
    providers: [UserPostsService],
  },
];
