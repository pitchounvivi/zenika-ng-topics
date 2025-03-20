import { Component, inject, input, ViewEncapsulation } from '@angular/core';
import { User } from '../shared/api/api.types';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserPostsService } from './user-posts.service';

@Component({
  selector: 'app-user-posts',
  imports: [UserDetailsComponent],
  templateUrl: './user-posts.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class UserPostsComponent {
  protected userPostsService = inject(UserPostsService);

  user = input.required<User>();
}
