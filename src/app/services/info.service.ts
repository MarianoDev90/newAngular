import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from '../interfaces/info.interface';
import { Member } from '../interfaces/member.interface';
import { AppConstants } from '../shared/app.config';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  info: Info = {};
  team: Member[] = [];
  constructor(public http: HttpClient) {
    this.loadInfo();
    this.getTeam();
  }
  loadInfo() {
    this.http.get(AppConstants.internalURL).subscribe((response: Info) => {
      if (response != null) {
        this.info = response;
      }
    });
  }
  getTeam() {
    this.http
      .get(AppConstants.teamURL)
      .subscribe((response: Member[]) => {
        if (response != null) {
          this.team = response;
        }
      });
    return this.team;
  }
}
