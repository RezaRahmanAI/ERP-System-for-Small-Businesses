import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { UserListComponent } from './app/Shared/components/user-list/user-list.component';

bootstrapApplication(UserListComponent, {
  providers: [provideHttpClient()],
}).catch((err) => console.error(err));
