import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.page.html',
  styleUrls: ['./newpage.page.scss'],
})

export class NewpagePage implements OnInit {
  public Data: any;
  public data123;
  public tempArr: any[] = [
    // {
    //   "pid": "15",
    //   "pname": "Balqees",
    //   "pDesc": "Alyahyei"
    // }
  ];


  Pname: String;
  Dscrp: String;

  constructor(private http: HttpClient, public alertController: AlertController) {
  }
  ngOnInit() {
  }

  public viewData() {

    let url = 'http://192.168.100.73:8080/DisplayProductDataintoDatabase';

    this.http.get(url).subscribe((response) => {
      // let abc = response;
      this.tempArr = [];
      this.tempArr.push(response);
      // this.ArrData[]=response;
      //  alert(JSON.stringify(response));
      //  alert(JSON.stringify(this.tempArr[0]));
      this.tempArr = this.tempArr[0];
    }, (err) => {
      // alert(JSON.stringify(err));
      this.presentAlert("Unable to get the data");
    });
  }

  SendData() {

    this.http.post('http://192.168.100.73:8080/SaveProductDataintoDatabase', {
      'pname': this.Pname, 'pDesc': this.Dscrp
    }).subscribe((response) => {
      this.presentAlert("Data send successfully")
      // alert(JSON.stringify(response));
    }, (err) => {
      this.presentAlert("Error Sending Data")

    });
  }

  UpdateData(Uid, name, Desc) {

    this.http.put('http://192.168.100.73:8080/UpdateProductDataintoDatabase', {
      'pid': Uid, 'pname': name, 'pDesc': Desc
    }).subscribe((response) => {
      // alert(JSON.stringify(response));
      this.presentAlert("Data Updated successfully")

    }, (err) => {
      this.presentAlert("Error to Update Data ")

    });
  }

  DeleteData(pid) {
    // let id=17;
    this.http.delete('http://192.168.100.73:8080/DeleteProductDataintoDatabase/' + pid)
      .subscribe((response) => {
        // alert(JSON.stringify(response));
        this.presentAlert("Data Deleted successfully")
      }, (DeleteDataError) => {
        // alert(JSON.stringify(DeleteDataError))
        this.presentAlert("Error to Delete Data")
      });
  }

  async presentAlertPrompt(id, name, desc) {
    const alert = await this.alertController.create({
      header: 'Edit Details!',
      inputs: [
        {
          name: 'name',
          type: 'text',
          value: name,
          placeholder: 'Enter Product Name'
        },
        {
          name: 'Desc',
          type: 'text',
          value: desc,
          placeholder: 'Enter Product Description'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (details) => {
            this.UpdateData(id, details.name, details.Desc);
            // this.UpdateData(data.name , )
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Alert',
      // subHeader: 'Subtitle',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }
}
