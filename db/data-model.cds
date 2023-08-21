namespace meetingNotes.db;

entity Meetings {
  key ID           : UUID @(Core.Computed: true);
      title        : String(100);
      description  : String;
      date         : Date;
      notes        : String;

      participants : Composition of many Participants
                       on participants.meeting = $self;
};

entity Participants {
  key ID      : UUID @(Core.Computed: true);
      name    : String;
      email   : String;
      role    : String;
      meeting : Association to one Meetings;
}
