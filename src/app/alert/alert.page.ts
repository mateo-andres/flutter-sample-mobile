import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  nombre: string;
  email: string

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentInput(){
    const input = await this.alertController.create({
      header: 'Cambio de información',
      subHeader: 'Ingrese el nuevo nombre y correo electronico:',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Nombre'
        },
        {
          name: 'txtEmail',
          type: 'text',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Aceptar',
          handler: (data) => {
            console.log('Confirm Ok', data);
            this.nombre = data.txtNombre;
            this.email = data.txtEmail;
          }
        }
      ]
    })

    await input.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cambiar información',
      subHeader: 'Esta es una alerta',
      message: 'Mensaje de alerta',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
