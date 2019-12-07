import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.scss"]
})
export class ResumeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    let xpList1 = document.getElementById("xp1");
    let btnXp1 = document.getElementById("btn_xp1");
    btnXp1.addEventListener("click", () => {
      xpList1.style.display =
        xpList1.style.display === "block" ? "none" : "block";
      console.log("click");
    });
  }
}
