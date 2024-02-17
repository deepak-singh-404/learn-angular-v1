import { Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PracticeComponent } from './practice/practice/practice.component';
import { IncrementDecrementComponent } from './increment-decrement/increment-decrement.component';
import { TogglePracticeComponent } from './toggle-practice/toggle-practice.component';

// Define your routes here
const routes: Routes = [
    { path: 'posts', component: PostComponent },
    { path: 'practice', component: PracticeComponent },
    { path: 'inc', component: IncrementDecrementComponent },
    { path: 'toggle', component: TogglePracticeComponent },
];

export { routes };