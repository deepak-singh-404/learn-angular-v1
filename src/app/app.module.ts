import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PostService } from './post.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
    ],
    //All components
    declarations: [
        AppComponent,
        PostComponent
        // TogglePracticeComponent,
        // IncrementDecrementComponent,
    ],
    providers: [PostService],
    bootstrap: [AppComponent]
})
export class AppModule { }
