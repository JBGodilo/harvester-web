import { NgModule } from '@angular/core';
import { MapDialogComponent } from './map-dialog/map-dialog.component';
import { AgmCoreModule } from '@agm/core';
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
    imports:[
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBo9IFBTH09-V6tHoySGD9xSw_rSwCbJxs',
            libraries: ['places']
          }),
          MatDialogModule,
          MatButtonModule
    ],
    declarations: [
        MapDialogComponent
    ]
})

export class DialogModule { }