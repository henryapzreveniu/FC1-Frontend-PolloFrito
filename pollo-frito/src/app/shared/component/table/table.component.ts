import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { DataService, SubscriptionInterface, SubscriptionReveniu } from '../../services/data-service.service';
import { ExportService } from '../../services/export-csv.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {

    loading: boolean = true;

    activityValues: number[] = [0, 100];

    allSubsIds:SubscriptionInterface[] = []
    allSubs: SubscriptionReveniu[] = []

    constructor(private customerService: DataService, private exportService: ExportService) { }

    private async requestDataForEachSub(){
        const newSubs = []
        for (let index = 0; index < this.allSubsIds.length; index++) {
            const element = this.allSubsIds[index];
            await this.customerService.getOneSubInfo(element.id).then(result =>{
                newSubs.push(result)
            }).catch(error=>{
                console.log(error)
            })
        }
        this.allSubs = newSubs;
        this.loading = false;
        console.log('All subs from reveniu', this.allSubs)
    }
    async ngOnInit() {
  
        await this.customerService.getAllSubs().then(subcriptions =>{
            this.allSubsIds = subcriptions.data;
            this.requestDataForEachSub()
        })        
    }

    exportData(){
        const exportFile = []
        this.allSubs.map(elem => {
            exportFile.push({
                "Nombre": elem.customer.name,
                "Correo": elem.customer.email,
                "Título": elem.link_title,
                "Precio": elem.plan_amount,
                "Ciclos": elem.cicles,
                "Ciclos Restantes": elem.remaining_cicles,
                "Último pago": elem.last_payment.date,
                "Estatus": elem.last_payment.status
            })
        })

        this.exportService.downloadFile(exportFile, 'stats.csv')
    }

    clear(table: Table) {
        table.clear();
    }
}
