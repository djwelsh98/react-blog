import akatsukigroup from "./components/assets/akatsuki-group.png";
import deidara from "./components/assets/deidara.png";
import hidan from "./components/assets/hidan.png";
import itachi from "./components/assets/itachi.png";
import kakuzu from "./components/assets/kakuzu.png";
import kisame from "./components/assets/kisame.png";
import madara from "./components/assets/madara.png";
import konan from "./components/assets/konan.png";
import nagato from "./components/assets/nagato.png";
import pain from "./components/assets/pain.png";
import obito from "./components/assets/obito.png";
import tobi from "./components/assets/tobi.jfif";
import orochimaru from "./components/assets/orochimaru.png";
import sasori from "./components/assets/sasori.png";
import taka from "./components/assets/taka.png";
import zetsu from "./components/assets/zetsu.png";
import OrochimaruTheme from "./components/assets/OrochimaruTheme.mp3";
import PainThemeNagato from './components/assets/PainThemeNagato.mp3';
import KnowPain from './components/assets/KnowPain.mp3';
import ShinraTensei from './components/assets/ShinraTensei.mp3';
import Amaterasu from './components/assets/Amaterasu.mp3';
import Suiton from './components/assets/Suiton.mp3';
import HidanLaugh from './components/assets/HidanLaugh.mp3';
import KakuzuTheme from './components/assets/KakuzuTheme.mp3';
import SasoriTheme from './components/assets/SasoriTheme.mp3';
import DeidaraAudio from './components/assets/DeidaraAudio.m4a';
import Tobi from './components/assets/Tobi.mp3';
import ObiRin from './components/assets/ObiRin.mp3';
import RealityMadara from './components/assets/RealityMadara.mp3';
import Zetsu from './components/assets/Zetsu.mp3';
import SasukeLaugh from './components/assets/SasukeLaugh.mp3';
import AkatsukiTheme from './components/assets/AkatsukiTheme.mp3';
import { Link } from 'react-router-dom';

let content = [
    {
        characterName: "Konan",
        characterText: "The Origami Kunoichi of the Hidden Rain Village",
        characterImg: konan,
        characterBlog: "The Angel of the Hidden Rain Village, the Origami Princess. Konan is a kunoichi able to substitute her body entirely with paper. She is an expert in the use of paper bombs as well as distraction techniques through the use of her paper form and prowess with Origami. Orphaned during the Third Great Shinobi War, Konan befriended Nagato and Yahiko, two boys stuck in the same situation as she. Living in the Hidden Rain placed between three warring Great Nations, and the Hidden Rain suffered mass casualties. The three children were then saved, trained, and protected by Master Jiraiya, one of the three LEgendary Sannin of the Hidden Leaf. Jiraiya watched over and protected the children for three years until they were ready to once again fend for themselves, now as Shinobi. Following Yahiko, Konan was a founding member of The Akastsuki, whose sole goal was to disrupt the power of the Five Great Nations and protect the Hidden Rain. Opposed by Hanzo the Salamander, Leader of the Hidden Rain, Yahiko was killed and Konan and Nagato manipulated. Konan spent the rest of her life by Nagato's side, refusing to lose another one of her best friends. Following Nagato's death, Konan returned to the Hidden Rain and left the Akatsuki. Hunted down by the organization, Konan battled with Tobi outside of the Hidden Rain, unleashing 600 Billion paper bombs on him. Once the smoke cleared it was apparent that Tobi was alive with minimal injury, and he proceeded to kill the Origami Princess and watch her paper body be disintegrated by the rain.",
        authorName: "Masashi Kishimoto",
        datePublished: "November 23, 2021",
        characterAudio: PainThemeNagato,
    },
    {
        characterName: "Nagato",
        characterText: "The Rinnegan Wielding Hidden Rain Shinobi",
        characterImg: nagato,
        characterBlog: "Nagato was an orphan of the Hidden Rain Village during the Third Great Shinobi War. Nagato befriended Yahiko and Konan and survived alongside them through the war. The three orphans were trained by Master Jiraiya, a Legendary Sannin of the Hidden Leaf, upon his discovery of the children orphaned by the war. Nagato was a shy boy during his training, and upon nearly seeing his friends get killed by a warring shinobi, he awakened the Rinnegan, an incredibly rare and powerful dojutsu, and killed the Jonin level shinobi, even though he was not yet a Genin. Following Jiraiya's departure from the Hidden Rain, Nagato became one of the original founding members of the Akatsuki. After the death of his best friend Yahiko by the hands of Hanzo the Salamander, Nagato took charge of the Akatsuki with a new imperative: capture all 9 Tailed Beasts and use them to control the world and suppress the Five Great Nations, thus achieving peace. Nagato died of his own volition, using the sacred Rinne Rebirth Jutsu to revive everybody he killed in his assault of Konoha, thus entrusting his dream of peace to a different path, one led by Naruto Uzumaki.",
        authorName: "Dustin Welsh",
        datePublished: "November 23, 2021",
        characterAudio: ShinraTensei,
    },
    {
        characterName: "Pain",
        characterText: "Corpse Puppets Controlled by Nagato",
        characterImg: pain,
        characterBlog: "Sometimes You Must Hurt In Order To Know, Fall In Order To Grow, Lose In Order To Gain, Because Life’s Greatest Lessons Are Learned Through Pain.- Pain ||| Pain is the persona created by Nagato for his leadership of the Akatsuki and the Hidden Rain Village. After exacting revenge on Hanzo the Salamander for the death of Yahiko, Pain when on a mission as the new leader of both the Hidden Rain and the Akatsuki: Capture all 9 Tailed Beasts and use them to exact revenge upon the Five Great Nations and make all people feel the pain he has felt. Pain hunted the Nine-Tails Jinchuriki, NAruto Uzumaki, on his own and used the prowess of his Rinnegan to completely annihilate the Hidden Leaf Village in the process. The rage that this induced in NAruto nearly unleashed the Tailed Beast and all of its power. However, Naruto was able to contain the beast within himself once again and defeat the 6 corpse puppets called Pain, the final corpse being that of Yahiko, leaving just Nagato once again",
        authorName: "Dustin Welsh",
        datePublished: "November 23, 2021",
        characterAudio: KnowPain,
    },
    {
        characterName: "Orochimaru",
        characterText: "The White Snake of the Legendary Sannin of Konoha",
        characterImg: orochimaru,
        characterBlog: "Orochimaru was once of the Three Legendary Sannin of the Village Hidden in the Leaves. He was trained alongside Master Jiraiya and the future 6th Hokage Lady Tsunade by th 3rd Hokage, Hiruzen Sarutobi. Alongside Jiraiya and Tsunade, he made a name for himself in the Third Great Ninja War, fighting Hanzo the Salamander to a stand still alongside his comrades. Following the conclusion of the war, Orochimaru returned to Konoha and beganb his quest to learn all jutsu in the world. Orochimaru's srudies and research led him down the darkest of paths, including human test subjects and soul stealing for the sake of immortality. AFter being chased out of the village with his Sensei on his heels, Orochimaru began his life as a fugitive Rogue Shinobi. He joined the Akatsuki for a short period before leaving of his own volition. Orochimaru stayed hidden, founding the Hidden Sound Village and unleashing an assault upon the Hidden Leaf during the Chunin exams, nearly completley unleashing the One-Tailed Beast, Shukaku. Orochimaru battled and killed his old Sensei the Third Hokage during this assault, however, he lost his arms to the Reaper Death Seal in the process. Unable to perform jutsu without his arms, Orochimaru manipulated the emotions of Sasuke Uchiha in order to gain him as a subordinate and gain control of his body and his Sharingan dojustsu. After training Sasuke's body to be the perfect vessel, Orochimaru was prepared to swap bodies with the young Uchiha. It was Orochimaru who would lose his life that day, only to be resurrected from White Snake Sage Cells during the Fourth Great Ninja War. Following the war Orochimaru became a rather passive researcher, under constant surveillance of the Hidden Leaf, but allowed to have some level of freedom as a result of his contributions in the war.",
        authorName: "Jiraiya",
        datePublished: "November 23, 2021",
        characterAudio: OrochimaruTheme,
    },
    {
        characterName: "Itachi Uchiha",
        characterText: "Clan Killer Itachi, Shinobi of the Village Hidden of the Leaves",
        characterImg: itachi,
        characterBlog: "Itachi Uchiha thought like a Hokage by the age of 7. A pacifist, deeply scarred by what he witnessed during the Third Great Shinobi War, Itachi fated himself as Clan-Killer Itachi for the sake of the Hidden Leaf Village, and for the sake of peace. Itachi Uchiha graduated the Ninja Academy at the age of 7, was placed into the ANBU Black OPS at the age of 11, and became the captian of the entire unti by 12. It was around this time that Itachi was being pulled between his devotion to the village and his devotion to his clan. With realtions between the Uchiha and the Hidden leaf souring, Itachi was approached by the Third HOkage and the Shadow Hokage Danzo and asked to eliminate the Uchiha. Itachi begrudgingly accepted his task, under the condition that his little brother Sasuke be spared and looked after following Itach's coming exile as a rogue shinobi. With his terms being met, Itachi happened upon the Masked Man Tobi, who offered to help Itachi, so long as Itachi pledged loyalty to the Akatsuki following his exile. The two slaughtered the entirety of the Uchiha clan in a single night. Itachi left the village, telling Sasuke to let his hatred fester and grow and to let it empower him until he could exact revenge upon Itachi. Itachi joined the Akatsuki, where he was partnered alongside Kisame Hoshigaki, and the two served the rest of their lives as partners in the Organization. Itachi met Sasuke 12 years following the massacre, at an old Uchiha clan hideout, where he assessed his young brothers abilities and allowed himself to be killed, happy to atone for his crimes at the hand of an Uchiha. During the Fourth Great Ninja War, Itachi was reanimated using Edo Tensei, and was able to break the control of the jutsu in order to assist his brother in releasing the remainder of the jutsu. Itachi left his brother plaesed he could once again call himself Itachi Uchiha, Shinobi of the Village Hidden in the Leaves.",
        authorName: "Dustin Welsh",
        datePublished: "November 23, 2021",
        characterAudio: Amaterasu,
    },
    {
        characterName: "Kisame Hoshigaki",
        characterText: "The Tailless Tailed Beast, Wielder of Samehada",
        characterImg: kisame,
        characterBlog: "Kisame Hoshigake was one of the Seven Ninja Swordsmen of the Hidden Mist Village. He left his village by assassinating both the leader of the Ninja Swordsmen, whom he took his blade Samehada from, as well as the Fourth Mizukage, Yagura. Kisame joined the Akatsuki and was partnered alongside Itachi Uchiha. Kisame loves to fight. He is quite sadistic and demonstrates no hesitation in mutilating his opponents. Despite his aggressive nature, Kisame is very perceptive and keen-minded in battle, able to deduce the basics behind an opponent's technique and react to any potential danger he is aware of. Also, due to being paired with Itachi, Kisame is usually unable to finish or even start his battles with Itachi around because the latter doesn't enjoy fighting as much as Kisame does.",
        authorName: "Masashi Kishimoto",
        datePublished: "November 23, 2021",
        characterAudio: Suiton,
    },
    {
        characterName: "Hidan",
        characterText: "By the power of Lord Jashin, he is immortal",
        characterImg: hidan,
        characterBlog: "During his childhood, after hearing rumours about the Valley of Hell, Hidan went and found it out of curiosity. There, he was disgusted by the smell of sulphur, and discovered corpses all over the area. After returning and telling others of the corpses, they weren't surprised that the Chinoike Clan couldn't survive living in the valley, prompting Hidan to correct their assumptions and informing them that the bodies weren't skeletons but actual bodies, with their blood not dry. His story lead to people suspecting Hidan of murdering them, as well as Yugakure ninja being dispatched to the area to investigate, during which they determined the slaughter to be a clan act. After Yugakure deteriorated from a shinobi village to a tourist site, Hidan became infuriated with how things were turning out. He believed that the shinobi that resided there were meant to kill, and thus slaughtered his neighbours before leaving Yugakure, and joining the cult-like faith known as Jashin, a religion that worshipped a deity of the same name. The primary teaching of this faith appears to be outright slaughter, where anything less than utter destruction is considered a sin. Through experiments with Jashin's secret technique, Hidan was granted immortality.",
        authorName: "Masashi Kishimoto",
        datePublished: "November 23, 2021",
        characterAudio: HidanLaugh,
    },
    {
        characterName: "Kakuzu",
        characterText: "Five Masks, Five Hearts",
        characterImg: kakuzu,
        characterBlog: "When under the servitude of Takigakure as an elite ninja, Kakuzu took on a mission to assassinate Hashirama Senju, the First Hokage. This mission, however, ended in failure against the God of Shinobi. Despite the insurmountable danger faced on the mission, what awaited his return to his village was the stigma and harsh punishment associated with the failure of his objective. In response to this treatment, a wrong levied against a shinobi who had put life and limb on the line for his village, Kakuzu came to hold a violent hatred for Takigakure as he escaped from imprisonment. In his flight from the village, Kakuzu killed the village elders, took their hearts, and fled with knowledge of the village's most prized forbidden techniques. He made a living off bounty hunting on the black market, and tearing out the still-beating hearts of powerful shinobi to extend his own lifespan and arsenal. At some time in the past, he apparently encountered the Gold and Silver Brothers and witnessed Kinkaku's jinchūriki transformation. Some time after his defection, he became affiliated with, and joined, the criminal organisation, Akatsuki. During his early years in Akatsuki, he had at least four partners that he eventually ended up killing due to his short temper, and would come to use their hearts for his Earth Grudge Fear. In the anime, he, Itachi and Konan were tasked with killing an apparent immortal, who turned out to be Hidan. He managed to destroy one of Kakuzu's heart. Taking an interest in his abilities, Akatsuki recruited Hidan instead. Kakuzu was eventually paired with Hidan, who took an interest in Kakuzu after thinking of him as a pioneer for immortality, despite a mutual dislike. He was deemed a fitting partner for Kakuzu as he could not be killed because of his own, similar immortality.",
        authorName: "Masashi Kishimoto",
        datePublished: "November 23, 2021",
        characterAudio: KakuzuTheme,
    },
    {
        characterName: "Sasori",
        characterText: "Puppet Master Sasori of the Red Sand",
        characterImg: sasori,
        characterBlog: "When Sasori was young, his father and mother were killed by Sakumo Hatake in battle, leaving him in the care of his grandmother, Chiyo. When Chiyo attempted to cheer him up by teaching him puppetry, Sasori's innate aptitude for the art became apparent, and he even began to devise masterful ways of eliminating a puppet master's weaknesses in battle. His skills even allowed him to create two puppets in the image of his parents in an attempt to discard the terrible loneliness he felt. However, as the puppets were unable to give him the real parental love that he desired, Sasori lost interest in them, and they later fell into Chiyo's possession. Sasori created many other ingenious puppets, including Kuroari, Karasu, and Sanshōuo. During the Third Shinobi World War, the effectiveness of his puppets in spilling his enemies' blood on the sand gave rise to Sasori's moniker Sasori of the Red Sand. However, motivated by his desire to make works that last forever, Sasori began experimenting to create puppets out of people. In the anime, his only friend, Komushi, lost his right arm during his border control duty, so Sasori gave him a new puppet arm as a prosthetic limb. After Komushi perished, having accidentally ingested some of Sasori's poison, Sasori proceeded to turn him into one of his first human puppets. Twenty years before his introduction in the series, Sasori left Sunagakure; it was around this time he converted his body into a puppet with his core of living flesh remaining as his only human part, thus appearing to maintain the youth of the time of his departure. Over ten years before his own death, Sasori secretly assassinated the Third Kazekage and made him into one of his human puppets. Despite this, Sasori noted the Third Kazekage did not die without giving Sasori a struggle. Sometime after becoming a missing-nin, Sasori was confronted by Konan and recruited into Akatsuki. Initially declining, Konan opted to fight him, proposing if he lost he would join. Sasori complied and despite using his puppet body, he ultimately lost and joined the organisation, being partnered up with Orochimaru and later Deidara. Saori was killed in battle by Granny Chiyo and Sakura",
        authorName: "Dustin Welsh",
        datePublished: "November 23, 2021",
        characterAudio: SasoriTheme,
    },
    {
        characterName: "Deidara",
        characterText: "Art... is an EXPLOSION!",
        characterImg: deidara,
        characterBlog: "During his time as an Iwagakure shinobi, Deidara came to know Ōnoki, and became familiarised with his fighting style. He possessed the Explosion Release kekkei genkai which he used as a member of the Explosion Corps. Though praised highly for his clay sculptures, Deidara's desire to reach even greater heights in his art resulted with him stealing one of his village's kinjutsu that allows one to knead their chakra into substances. Using explosive clay to take out his pursuers, Deidara found the art he had desired: the Art of a Single Moment. Remembering the first moment whenever he detonated his explosive clay, he recalls the process that allowed him to reach this art. Since then, Deidara became a missing-nin and offered his services as a bomber to insurgents in various countries. Deidara's exploits eventually caught the attention of Akatsuki, and Itachi Uchiha, Kisame Hoshigaki, and Sasori were sent to recruit him. Deidara refused at first until he accepts a challenge from Itachi on the condition that Akatsuki let him be if he won. However, Deidara was easily defeated by Itachi's Sharingan and begrudgingly joined the organisation where he was partnered with Sasori. In the anime, Sasori and Deidara were immediately tasked with eliminating Orochimaru for betraying the organisation. Upon arriving in the Land of Wind and witnessing the Summoning: Impure World Reincarnation by Orochimaru, the Sannin retreated after his technique proved incomplete. After Deidara attempted to kill him by blowing up his base, Deidara and Sasori searched the ruins but were unable to confirm his death as they didn't find his corpse. At some point afterwards, Deidara returned to Iwagakure and left it in destruction after detonating a bomb within the village, as he flew away. With his ego crushed from his defeat at the hands of Itachi's dōjutsu, Deidara carried a murderous loathing for Itachi and his Sharingan for the rest of his life. Acknowledging that Itachi was a more powerful opponent, Deidara took steps during his time with Akatsuki to ensure he could get revenge on Itachi, such as training his left eye to counter genjutsu, and devising the means to create C4, which he would use in his battle with Sasuke Uchiha in a failed suicide victory attempt.",
        authorName: "Dustin Welsh",
        datePublished: "November 23, 2021",
        characterAudio: DeidaraAudio,
    },
    {
        characterName: "Tobi",
        characterText: "The Masked Man Who Unleashed the Nine-Tailed Fox Spirit Upon Konoha",
        characterImg: tobi,
        characterBlog: "He was originally a human victim of Kaguya Ōtsutsuki's Infinite Tsukuyomi, who was tethered to the God Tree over the course of years until transforming. He was ultimately stored within the Demonic Statue of the Outer Path, where he remained until the statue was summoned by Madara Uchiha, who used it to cultivate Hashirama Senju's DNA to produce a large flowering tree. Black Zetsu then removed him and White Zetsu from inside the statue and modified with Hashirama's DNA, leading Madara to believe they were imperfect clones of Hashirama. Serving as one of Madara's minions, he met and befriended Obito Uchiha shortly after the latter was brought beneath Mountains' Graveyard and saved by Madara, being designated the task of making sure the young Uchiha was of use to Madara when he woke up. He, along with White Zetsu, enjoyed annoying and teasing Obito about things such as what he murmured in his sleep and human bodily functions. Over time, the duo became friends with the young Uchiha. During this time, Obito coined the nickname Guruguru based on his appearance, a nickname that would eventually stick. Months into Obito's rehabilitation, White Zetsu returned to the underground base and urgently alerted Obito that he saw Kakashi Hatake and Rin Nohara being cornered by Kirigakure shinobi while he was outside. Resolving to save his friends and return home, Obito tried to break the huge stone blocking the exit in an effort to escape, but destroyed his artificial arm, only cracking the wall in the process. Seeing how desperate Obito was, Tobi noted that his limbs were not strong enough to break through stone yet, and offered himself as a suit of sorts for Obito to wear in order to make it to the surface. Although Obito was sceptical about whether they had permission to help, White Zetsu noted that it would be fine. After witnessing the death of Rin by the hand of Kakashi, Obito gave in to Tobi completely, letting white Zetsu take over him and allowing himself to be a puppet to Madara for the time being.",
        authorName: "Jiraiya",
        datePublished: "November 23, 2021",
        characterAudio: Tobi,
    },
    {
        characterName: "Obito Uchiha",
        characterText: "Everything is for his love of Rin",
        characterImg: obito,
        characterBlog: "Obito grew up not knowing who his parents were; in the anime, he was left in the care of his grandmother. Feeling alone in the world, Obito dreamed of becoming Hokage so that the people of the village would acknowledge his existence. He enrolled in the Academy to help him achieve that goal, where he developed a one-sided rivalry with Kakashi, whose natural talent and popularity he was jealous of. He also became a close friend of Rin Nohara, whom he eventually fell in love with. After finally graduating some years later, Obito, Rin, and Kakashi were placed on a team under the leadership of Minato Namikaze. In the anime, as a final qualifying test, Minato gave the team a bell test to test their cooperation skills. Obito could not accomplish this on his own but, by joining forces with Rin and Kakashi, they succeeded in taking the bells, teaching Obito the value of teamwork. The team later participated in the Chūnin Exams, where Obito was defeated in the third round in a one-on-one match with Might Guy. Kakashi would go on to defeat Guy in a subsequent match, promoting him to chūnin and impressing Rin. Eager for Rin's attention, Obito trained relentlessly, eventually rising to the rank of chūnin himself. His excitement was short-lived as Kakashi soon afterwards became a jōnin, once again earning Rin's praise and Obito's resentment. During the Third Shinobi World War, Kakashi was placed in charge of the team for a mission to destroy the Kannabi Bridge, which would hinder Iwagakure from using Kusagakure as a relief point. Before beginning the mission, Minato and Rin gave gifts to Kakashi to celebrate his promotion to jōnin, though Obito had forgotten, straining their already poor relationship. Minato was soon called to the front lines, leaving the team to complete the mission alone under Kakashi's command. The three were discovered by Iwa-nin along the way and Rin was captured. Kakashi elected to abandon Rin, believing it was more important to finish the mission before concerning themselves with her safety. Obito became enraged at the idea and insisted that they focus on her rescue. When Kakashi refused, Obito left on his own, remarking that Kakashi was worse than trash for abandoning his friends. Upon pursuing Rin, Obito threw Kakashi out of harms way and got crushed by a falling boulder. Obito gave Kakashi his remaining Sharingan as a gift for his Jonin promotion. Obito was then thought dead until the Fourth Great Ninja War.",
        authorName: "Jiraiya",
        datePublished: "November 23, 2021",
        characterAudio: ObiRin,
    },
    {
        characterName: "Madara Uchiha",
        characterText: "The Ghost of the Uchiha",
        characterImg: madara,
        characterBlog: "Madara's childhood was a product of the times he lived in: the constant fighting made him a perfectionist that would keep at something until he mastered it, and his triumphs on the battlefield made him very confident in his abilities and talent. Madara's actions and beliefs were singularly focused on protecting Izuna, his only surviving brother. So long as he had Izuna, Madara was reasonable and kind, willing to make concessions for a perceived greater good. Madara changed after Izuna's death, embracing his clan's Curse of Hatred, he opted to die for revenge rather than compromise or forgive. Although he was briefly convinced to set aside his grief and try to replace Izuna with the collective family of Konoha, he could never shake the feeling that he was betraying Izuna's memory. The increasing isolation of himself and other Uchiha from village politics ultimately convinced him of this, causing him to fully break with any other attachments. As he valued only power and possessed so much of it, Madara therefore disliked to waste it on unworthy causes or unchallenging opponents, claiming disgust when he was forced to.Madara loved fighting above all else: the sights, the sounds, even the taste of his own blood. Yet he was very disciplined in a fight, never allowing his failed plans or attacks to upset him, never letting superior numbers or power intimidate him, and always willing to do whatever must be done to gain victory. Although he sometimes imposed limitations on himself, such as not using certain techniques more than once, he was willing to lower himself with unbecoming tactics or excessive displays in order to change tactics and exploit advantages. He was perfectly aware of his talents and did not feign modesty, bluntly stating when he was stronger than his opponents and belittling them when they continued to defy him. Conversely, if he was proven wrong or somebody posed a legitimate challenge to him, he would admit it, and apologise for previous remarks if necessary. In addition, if such an opponent is about to die, he would show them the ultimate respect by taking the time and effort to finish them off himself, even if said person is going to die on their own. Stemming from this, he feels insulted if he knows an opponent isn't using their full power against him, even if he knows it will result in their death.",
        authorName: "Jiraiya",
        datePublished: "November 23, 2021",
        characterAudio: RealityMadara,
    },
    {
        characterName: "Zetsu",
        characterText: "The Cells of the First Hokage and the Chakra of the Progenitor Created this Creature",
        characterImg: zetsu,
        characterBlog: "Unlike Black Zetsu, White Zetsu, nicknamed Chatterbox, was carefree and playful with a habit of teasing others, traits shared by his clone siblings. In the Japanese version of the manga, White Zetsu used kanji and kana regularly. This was often conveyed in the anime through a higher-pitched voice. While he and Black Zetsu sometimes had differing opinions, the two halves were still able to function as a single entity. White Zetsu appeared to be extremely trustworthy, obedient and loyal, being entrusted with Akatsuki's secrets and knowledge of Madara's Eye of the Moon Plan, which he believed to be beneficial to mankind. Because of his ties to Madara, White Zetsu worked with Obito for a long time, originally helping him find and convince Nagato to join them. He was shown to be quite friendly to most Akatsuki members, indicated by how he was saddened that so many had died in a conversation about them with Tobi; in the anime, one of his clones freed a captured Deidara, saying he was a fun guy to be around in Akatsuki. Though he annoyed Obito at first, White Zetsu eventually won the boy's friendship. Like Tobi, White Zetsu believed Madara was a good man at heart and saw no harm in helping Obito without Madara's permission.Zetsu's main role within Akatsuki was to function as a spy, with other duties that were similar to those of a hunter-nin. He was able to control his body and take part in the tailed beast sealing ritual simultaneously, which, in addition to being unique to him, allowed him to act as a lookout while the sealing took place. When an agent of Akatsuki, or possibly even a member, died, Zetsu was sent to devour their bodies so as to not have their secrets revealed, further adding to his nature as a half-plant creature. Zetsu was also the one sent to retrieve the rings of dead Akatsuki members. Due to the role he played, Zetsu was the only member of Akatsuki to act without a partner on a regular basis. He operated on his own, often moving between the different locations where the other Akatsuki members were located. This resulted in other members reporting directly to him, rather than the figurehead leader, Pain. Zetsu would in turn report directly to Pain as well as Obito, the organisation's benefactor and eventual leader.",
        authorName: "Masashi Kishimoto",
        datePublished: "November 23, 2021",
        characterAudio: Zetsu,
    },
    {
        characterName: "Taka/Hebi",
        characterText: "Group Formed by Sasuke Uchiha",
        characterImg: taka,
        characterBlog: "After betraying Orochimaru, Sasuke travelled to various Otogakure bases to recruit his three teammates, Suigetsu Hōzuki, Karin, and Jūgo. After witnessing Itachi's death, and learning Konoha's role in the Uchiha Clan Downfall from Tobi, Sasuke renamed the team Taka with the new goal to crush Konoha. Although their team was originally one of necessity, they all came to respect each other as teammates and even risked their lives to protect one another as time went on, reminding Sasuke of Team 7. However, as Sasuke became more corrupt and focused in his revenge against Konoha, he abandoned Jūgo and Suigetsu in the Land of Iron to pursue Danzō Shimura, and, when Karin was taken hostage, he critically wounded her, and also tried to kill her to avoid any trouble with her. Karin was saved by Sasuke's former teammates of Team Kakashi and taken back to Konoha as a prisoner-of-war. While Karin states that she was finished with Sasuke and tries to escape from the Konoha prison, Jūgo and Suigetsu, not knowing what Sasuke did and tried to do to Karin, reunited with Sasuke and decided to assist him in determining if revenge or protecting Konoha was his true purpose. They were later met with Karin in Konoha, and she decided to rejoin them despite what had happened in the past. Upon Sasuke's decision to protect Konoha, everyone, including a recently restored Orochimaru, participated in the Fourth Shinobi World War and sided with the Allied Shinobi Forces. When Sasuke was critically wounded, Suigetsu, Jūgo, Karin, and Orochimaru risked their lives to save him and found him being healed by Kabuto Yakushi. After the war, Taka permanently dissolved; Sasuke returned to Konoha and left for a journey of atonement, as well as having a family of his own, while the others returned to Orochimaru's hideout to work as his assistants.",
        authorName: "Masashi Kishimoto",
        datePublished: "November 23, 2021",
        characterAudio: SasukeLaugh,
    },
    {
        characterName: "The Organization",
        characterText: "The Akatsuki and Their Histories",
        characterImg: akatsukigroup,
        characterBlog: "The initial concept of Akatsuki was devised by Black Zetsu as part of its plan to revive its mother, though it pretended the idea came from Madara Uchiha, whom Black Zetsu tricked into thinking that it was a manifestation of his will. Akatsuki was originally founded by Yahiko during the Third Shinobi World War alongside his childhood friends, Nagato and Konan. As citizens of Amegakure who had been orphaned by the Second Shinobi World War, the three created Akatsuki as a way to bring peace to their home country, which too often got caught in the crossfire of the Five Great Shinobi Countries' many conflicts. In time, the three were approached by Tobi, who introduced himself as Madara Uchiha. Tobi claimed Nagato was the reincarnation of the Sage of Six Paths and offered to teach him to control the power of his Rinnegan, though Yahiko distrusted him and prompted Nagato to turn down his offer. Nevertheless, Tobi would later claim that it was he who encouraged Yahiko to form Akatsuki, unbeknownst to Konan. Akatsuki's desire for an end to war attracted many fellow Ame ninja to their cause and, in time, word of their exploits began to travel beyond Amegakure's borders. Akatsuki's early fame was owed largely to Yahiko's leadership and his natural charisma, which kept the group united and motivated them to persevere despite the difficulties of their goal. Yahiko, however, viewed himself as merely a facilitator for Nagato, who would ultimately be the actual source of world peace because of his Rinnegan. Ame's leader, Hanzō, also became aware of Akatsuki and perceived them as a threat to his rule, a belief encouraged by Danzō Shimura in the anime. Hanzō approached Akatsuki offering to help them broker peace between Konohagakure, Iwagakure, and Sunagakure. When Yahiko, Nagato, and Konan arrived to meet with him, however, they were ambushed by Hanzō's men and members of Danzō's Root, who took Konan hostage and forced Yahiko to commit suicide in order to save her. Enraged by Yahiko's death, Nagato summoned the Demonic Statue of the Outer Path and used it to slaughter their attackers, though Hanzō himself escaped.",
        authorName: "Masashi Kishimoto",
        datePublished: "November 23, 2021",
        characterAudio: AkatsukiTheme,
    }
]

export default content