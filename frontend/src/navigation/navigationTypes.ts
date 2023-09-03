import { NavigatorScreenParams } from "@react-navigation/native";
import { IEvent } from "../model/eventData";

export type RootStackParamList = {
    HomeStack: NavigatorScreenParams<HomeTabParamList>;
    EventStack: NavigatorScreenParams<EventTabParamList>;
    bos: undefined;
    Settings: undefined
};

export type HomeTabParamList = {
        Home:undefined
};

export type EventTabParamList = {
    EventList: undefined
    EventDetail: { item: IEvent }
}