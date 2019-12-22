import { NgModule } from  '@angular/core';
import {MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule, MatTableModule,} from  '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconImportModule } from 'mat-icon-import';
@NgModule({
    imports: [MatNativeDateModule,  MatTableModule,
        MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule,FormsModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,],
    
    exports: [MatNativeDateModule,FormsModule,  MatTableModule,

    MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,],
    
    })
export class MyMaterialModule { }
