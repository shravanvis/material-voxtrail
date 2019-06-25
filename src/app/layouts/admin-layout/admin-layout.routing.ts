import { DrivesStopsComponent } from './../../reports/drives-stops/drives-stops.component';
import { OverspeedComponent } from './../../reports/overspeed/overspeed.component';
import { ZoneInOutComponent } from './../../reports/zone-in-out/zone-in-out.component';
import { DailyComponent } from './../../reports/daily/daily.component';
import { GeoFenceComponent } from './../../geo-fence/geo-fence.component';
import { HistoryComponent } from './../../history/history.component';
import { ReportsComponent } from './../../reports/reports.component';
import { TrackingComponent } from './../../tracking/tracking.component';
import { VehicleListComponent } from './../../vehicle-list/vehicle-list.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { NotificationsComponent } from '../../notifications/notifications.component';


import { GeneralInfoComponent } from './../../reports/general-info/general-info.component';
import { DriveScoreComponent } from 'app/reports/drive-score/drive-score.component';
import { SensorComponent } from 'app/reports/sensor/sensor.component';
import { TripComponent } from 'app/reports/trip/trip.component';
import { SettingsComponent } from 'app/settings/settings/settings.component';
import { ObjectsComponent } from 'app/settings/objects/objects.component';
import { GroupsComponent } from 'app/settings/groups/groups.component';
import { DriversComponent } from 'app/settings/drivers/drivers.component';
import { SubAccountsComponent } from 'app/settings/sub-accounts/sub-accounts.component';
import { OthersComponent } from 'app/settings/others/others.component';
import { EventsComponent } from 'app/settings/events/events.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'vehicles-list',      component: VehicleListComponent },
    { path: 'tracking',      component: TrackingComponent },
    { path: 'settings',      component: SettingsComponent,
      children: [
          { path: 'objects', component: ObjectsComponent },
          { path: 'groups', component: GroupsComponent },
          { path: 'drivers', component: DriversComponent },
          { path: 'sub-accounts', component: SubAccountsComponent },
          { path: 'others', component: OthersComponent },
          { path: 'events', component: EventsComponent }
      ] },
    { path: 'reports',      component: ReportsComponent,
children: [
    {path: 'general-info-report', component: GeneralInfoComponent},
    {path: 'daily-report', component: DailyComponent},
    {path: 'zone_In-out-report', component: ZoneInOutComponent},
    {path: 'drives&stops-report', component: DrivesStopsComponent},
    {path: 'overspeed-report', component: OverspeedComponent},
    {path: 'drive-score-report', component: DriveScoreComponent},
    {path: 'sensor-report', component: SensorComponent},
    {path: 'trip-report', component: TripComponent}

]},
    { path: 'history',      component: HistoryComponent },
    { path: 'geo-fence',      component: GeoFenceComponent }
];
