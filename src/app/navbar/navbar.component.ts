import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MapDialogComponent } from '../dialog/map-dialog/map-dialog.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openMapDialog() {
    const dialogRef = this.dialog.open(MapDialogComponent, { width: '50%', height: '50%' });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
