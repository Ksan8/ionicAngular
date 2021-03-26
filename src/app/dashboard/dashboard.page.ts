import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../components/modal/modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.router.navigate(['/account']);
  }

  async showModal(): Promise<any> {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
    });

    return await modal.present();
  }
}
