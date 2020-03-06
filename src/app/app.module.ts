import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ChartsModule } from "ng2-charts";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { DataService } from "../data.service";
import { ExcelService } from "../excel.service";

@NgModule({
  imports: [BrowserModule, FormsModule, ChartsModule, RouterModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [DataService,ExcelService]
})
export class AppModule {}
