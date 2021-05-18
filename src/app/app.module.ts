import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component'
import { ProfileViewComponent } from './profile-view/profile-view.component'
import { MenuContainerComponent } from './menu-container/menu-container.component'
import { MenuElementComponent } from './menu-element/menu-element.component'

@NgModule({
	declarations: [
		AppComponent,
		NavigationBarComponent,
		ProfileViewComponent,
		MenuContainerComponent,
		MenuElementComponent
	],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
