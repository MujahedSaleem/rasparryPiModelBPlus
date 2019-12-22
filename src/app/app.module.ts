import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SeqComponent } from './seq/seq.component';
import { OscComponent } from './osc/osc.component';
import { LfoComponent } from './lfo/lfo.component';
import { FilterComponent } from './filter/filter.component';
import { PatchOverlayComponent } from './patch-overlay/patch-overlay.component';
import { PatchesService } from "./patches.service";
import { SourceComponent } from './source/source.component';
import { CableComponent } from './cable/cable.component';
import { SinkComponent } from './sink/sink.component';
import { MixerComponent } from './mixer/mixer.component';
import { PingpongComponent } from './pingpong/pingpong.component';
import { GainComponent } from './gain/gain.component';
import { SliderComponent } from './slider/slider.component';
import { TogglesComponent } from './toggles/toggles.component';
import { NoiseComponent } from './noise/noise.component';
import { CompressorComponent } from './compressor/compressor.component';
import { SignalComponent } from './signal/signal.component';
import { FrameComponent } from './frame/frame.component';
import { TriggerComponent } from './trigger/trigger.component';
import { AnalyserComponent } from './analyser/analyser.component';
import { MembraneComponent } from './membrane/membrane.component';
import { AdsrComponent } from './adsr/adsr.component';
import { ClockComponent } from './clock/clock.component';
import { Seq2Component } from './seq2/seq2.component';
import { BinaryComponent } from './binary/binary.component';
import { DividerComponent } from './divider/divider.component';
import { DL1017LComponent } from './DL 1017L/DL1017L.component';
import { DL9013GComponent } from './DL 9013G/DL9013G.component';
import { DL9031Component } from './DL 9031/DL9031.component';
import { DL10065NComponent } from './DL 10065N/DL10065N.component';
import { DL2108TALComponent } from './DL2108TAL-SW/DL2108TAL-SW.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LoginComponent } from './login/login.component';
import { MyMaterialModule } from './material.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { OverViewComponent } from './overView/overView.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HeaderComponent } from './header/header.component';
import { ViewContentComponent } from './viewContent/viewContent.component';


import {MatExpansionModule} from '@angular/material/expansion'; 
import { HttpClientModule } from '@angular/common/http';
import { DL1017RComponent } from './DL 1017R/DL1017R.component';
import { BookComponent } from './book/book.component';
@NgModule({
   declarations: [
      AppComponent,
      BookComponent,
      DL9031Component,
      HeaderComponent,
      SeqComponent,
      DL10065NComponent,
      DL9013GComponent,
      OscComponent,
      DL1017LComponent,
      DL1017RComponent,
      LfoComponent,
      FilterComponent,
      HomeComponent,
      PatchOverlayComponent,
      SourceComponent,
      DL2108TALComponent,
      CableComponent,
      SinkComponent,
      MixerComponent,
      PingpongComponent,
      GainComponent,
      SliderComponent,
      TogglesComponent,
      NoiseComponent,
      CompressorComponent,
      SignalComponent,
      FrameComponent,
      TriggerComponent,
      AnalyserComponent,
      MembraneComponent,
      AdsrComponent,
      ClockComponent,
      Seq2Component,
      BinaryComponent,
      DividerComponent,
      LoginComponent,
      WelcomeComponent,
      OverViewComponent,
      ViewContentComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpClientModule,
      HttpModule,
      MatExpansionModule,
      FlexLayoutModule,
      MyMaterialModule,
      DragDropModule,
      RouterModule.forRoot([
         { path: 'home', component: HomeComponent },
         { path: 'login', component: LoginComponent },
         { path: 'book', component: BookComponent },
         { path: 'overview', component: OverViewComponent },
         { path: 'viewcontent/:id', component: ViewContentComponent },
         { path: '', redirectTo: 'login', pathMatch: 'full' }
      ])],
   providers: [
      PatchesService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {
}
