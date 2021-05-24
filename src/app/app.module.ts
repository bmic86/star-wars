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

@NgModule({
	declarations: [
		AppComponent,
		NavigationBarComponent,
		ProfileViewComponent,
		MenuContainerComponent,
		MenuElementComponent
	],
	imports: [BrowserModule, NgbModule, HttpClientModule],
	providers: [StarWarsService],
	bootstrap: [AppComponent]
})
export class AppModule {}
