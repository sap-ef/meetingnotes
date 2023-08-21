sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'meetings/test/integration/FirstJourney',
		'meetings/test/integration/pages/MeetingsList',
		'meetings/test/integration/pages/MeetingsObjectPage'
    ],
    function(JourneyRunner, opaJourney, MeetingsList, MeetingsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('meetings') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheMeetingsList: MeetingsList,
					onTheMeetingsObjectPage: MeetingsObjectPage
                }
            },
            opaJourney.run
        );
    }
);