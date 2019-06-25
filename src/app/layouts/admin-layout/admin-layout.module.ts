import { SettingsComponent } from '../../settings/settings/settings.component';


import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
// import { UserProfileComponent } from '../../user-profile/user-profile.component';
// import { TableListComponent } from '../../table-list/table-list.component';
// import { TypographyComponent } from '../../typography/typography.component';
// import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
// import { UpgradeComponent } from '../../upgrade/upgrade.component';

import { GeoFenceComponent } from './../../geo-fence/geo-fence.component';
import { HistoryComponent } from './../../history/history.component';
import { ReportsComponent } from './../../reports/reports.component';
import { TrackingComponent } from './../../tracking/tracking.component';
import { VehicleListComponent } from './../../vehicle-list/vehicle-list.component';

// Reports Child Components
import { GeneralInfoComponent } from './../../reports/general-info/general-info.component';
import { DailyComponent } from './../../reports/daily/daily.component';
import { ZoneInOutComponent } from './../../reports/zone-in-out/zone-in-out.component';
import { DrivesStopsComponent } from './../../reports/drives-stops/drives-stops.component';
import { OverspeedComponent } from './../../reports/overspeed/overspeed.component';
import { DriveScoreComponent } from './../../reports/drive-score/drive-score.component';
import { SensorComponent } from './../../reports/sensor/sensor.component';
import { TripComponent } from './../../reports/trip/trip.component';

// settings child components
import { ObjectsComponent } from '../../settings/objects/objects.component';
import { GroupsComponent } from '../../settings/groups/groups.component';
import { DriversComponent } from '../../settings/drivers/drivers.component';
import { SubAccountsComponent } from '../../settings/sub-accounts/sub-accounts.component';
import { OthersComponent } from '../../settings/others/others.component';
import { EventsComponent } from '../../settings/events/events.component';


import { AgmCoreModule } from '@agm/core';

// MDB Angular Free
import { IconsModule } from 'angular-bootstrap-md';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA6oOTzzMuHvqBuZx0Oy6PdCq9v3byyWII'}),
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    IconsModule,
    NgbModule,
    MatTableModule,
    MatPaginatorModule,
    MatRadioModule,
    MatMenuModule,
    MatDialogModule,
    MatCheckboxModule
    // NgxMatSelectSearchModule
  ],
  declarations: [
    DashboardComponent,
    // UserProfileComponent,
    // TableListComponent,
    // TypographyComponent,
    // IconsComponent,
    MapsComponent,
    NotificationsComponent,
    SettingsComponent,
    // UpgradeComponent,
    VehicleListComponent,
    TrackingComponent,
    ReportsComponent,
    HistoryComponent,
    GeoFenceComponent,
    GeneralInfoComponent,
    DailyComponent,
    ZoneInOutComponent,
    DrivesStopsComponent,
    OverspeedComponent,
    DriveScoreComponent,
    SensorComponent,
    TripComponent,

    ObjectsComponent,
    GroupsComponent,
    DriversComponent,
    SubAccountsComponent,
    OthersComponent,
    EventsComponent

  ]
})

export class AdminLayoutModule {}
