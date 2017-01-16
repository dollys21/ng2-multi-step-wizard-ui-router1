import { Component, OnInit, Input, OnDestroy }   from '@angular/core';

import { FormDataService }     from 'app/data/formData.service'

@Component ({
    selector:     'mt-wizard-address'
    ,templateUrl: 'app/address/address.component.html'
})

export class AddressComponent implements OnInit, OnDestroy {
    title = 'Address';
    @Input() formData;
    
    constructor(private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.formData = this.formDataService.getData();
        console.log(this.title + ' loaded!');
        console.log(this.formData);
    }

    ngOnDestroy() {
        this.formDataService.setData(this.formData);
        console.log(this.title + ' unloaded!');
    }
}