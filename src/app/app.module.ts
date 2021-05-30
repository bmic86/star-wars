import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component'
import { ProfileViewComponent } from './profile-view/profile-view.component'
import { MenuContainerComponent } from './menu-container/menu-container.component'
import { MenuElementComponent } from './menu-element/menu-element.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { StarWarsService } from './services/star-wars.service'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { MenuPagingElementComponent } from './menu-paging-element/menu-paging-element.component'

@NgModule({
	declarations: [
		AppComponent,
		NavigationBarComponent,
		ProfileViewComponent,
		MenuContainerComponent,
		MenuElementComponent,
		MenuPagingElementComponent
	],
	imports: [BrowserModule, NgbModule, HttpClientModule, ReactiveFormsModule],
	providers: [StarWarsService],
	bootstrap: [AppComponent]
})
export class AppModule {}
