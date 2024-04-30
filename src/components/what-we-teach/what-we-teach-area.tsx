import React from 'react';
import { RefTagger } from 'react-reftagger';

import SingleTeaching from './single-teaching';

interface NavTabProps {
  active?: boolean;
  id: string;
  title: string;
}

function NavTab({ active = false, id, title }: NavTabProps) {
  return (
    <li className='nav-item' role='presentation'>
      <button
        className={`nav-link ${active ? 'active' : ''}`}
        data-bs-toggle='tab'
        data-bs-target={`#${id}`}
        type='button'
        role='tab'
        aria-selected={active ? 'true' : 'false'}
      >
        {title}
      </button>
    </li>
  );
}

const customStyles = {
  heading: {
    backgroundColor: '#f56d6e',
    color: '#ffffff',
    fontSize: '16px',
  },

  body: {
    color: '#ffffff !important',
    backgroundColor: '#f56d6e',
    moreLink: {
      color: '#ffffff',
    },
  },
};

const WhatWeTeachArea = () => {
  return (
    <>
      <RefTagger
        tooltipStyle='dark'
        customStyle={customStyles}
        bibleVersion='ESV'
      />
      <section className='edu-section-gap faq-page-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='faq-page-nav'>
                <h3 className='title'>What We Teach</h3>
                <p>
                  Explore the essence of our teachings, shaping minds for a
                  brighter future.
                </p>

                <ul className='nav nav-tabs' role='tablist'>
                  <NavTab
                    active={true}
                    id='wwt-ths'
                    title='The Holy Scriptures'
                  />
                  <NavTab id='wwt-god' title='God' />
                  <NavTab id='wwt-man' title='Man' />
                  <NavTab id='wwt-salvation' title='Salvation' />
                  <NavTab id='wwt-church' title='The Church' />
                  <NavTab id='wwt-angels' title='Angels' />
                  <NavTab id='wwt-lastthings' title='Last Things' />
                </ul>
              </div>
            </div>
            <div className='col-lg-8'>
              <div
                className='tab-content faq-page-tab-content'
                id='faq-accordion'
              >
                <div
                  className='tab-pane fade show active'
                  id='wwt-ths'
                  role='tabpanel'
                >
                  <div className='faq-accordion'>
                    <div className='accordion'>
                      <SingleTeaching
                        show={true}
                        id='1'
                        title='The Holy Scriptures'
                        desc={
                          <>
                            <p>
                              We teach that the Bible is God's written
                              revelation to man, and thus the sixty six books of
                              the Bible given to us by the Holy Spirit
                              constitute the plenary (inspired equally in all
                              parts) Word of God (1 Corinthians 2:7-14; 2 Peter
                              1:20-21).
                            </p>
                            <br />
                            <p>
                              We teach that the Word of God is an objective,
                              propositional revelation (1 Thessalonians 2:13; 1
                              Corinthians 2:13), verbally inspired in every word
                              (2 Timothy 3:16), absolutely inerrant in the
                              original documents, infallible, and God-breathed.
                              We teach the literal, grammatical-historical
                              interpretation of Scripture which affirms the
                              belief that the opening chapters of Genesis
                              present creation in six literal days (Genesis
                              1:31; Exodus 31:17).
                            </p>
                            <br />
                            <p>
                              We teach that the Bible constitutes the only
                              infallible rule of faith and practice (Matthew
                              5:18; 24:35; John 10:35; 16:12-13; 17:17; 1
                              Corinthians 2:13; 2 Timothy 3:15-17; Hebrews 4:12;
                              2 Peter 1:20-21).
                            </p>
                            <br />
                            <p>
                              We teach that God spoke in His written Word by a
                              process of dual authorship. The Holy Spirit so
                              superintended the human authors that, through
                              their individual personalities and different
                              styles of writing, they composed and recorded
                              God's Word to man (2 Peter 1:20 21) without error
                              in the whole or in the part (Matthew 5:18; 2
                              Timothy 3:16).
                            </p>
                            <br />
                            <p>
                              We teach that, whereas there may be several
                              applications of any given passage of Scripture,
                              there is but one true interpretation. The meaning
                              of Scripture is to be found as one diligently
                              applies the literal grammatical-historical method
                              of interpretation under the enlightenment of the
                              Holy Spirit (John 7:17; John 16:12-15; 1
                              Corinthians 2:7-15; 1 John 2:20). It is the
                              responsibility of believers to ascertain carefully
                              the true intent and meaning of Scripture,
                              recognizing that proper application is binding on
                              all generations. Yet the truth of Scripture stands
                              in judgment of men; never do men stand in judgment
                              of it.
                            </p>
                          </>
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className='tab-pane fade' id='wwt-god' role='tabpanel'>
                  <div className='faq-accordion'>
                    <div className='accordion'>
                      <SingleTeaching
                        show={true}
                        id='8'
                        title='God'
                        desc={
                          <p>
                            We teach that there is but one living and true God
                            (Deuteronomy 6:4, Isaiah 45:5-7, 1 Corinthians 8:4)
                            an infinite, all-knowing Spirit, (John 4:2) perfect
                            in all His attributes, one in essence, eternally
                            existing in three Persons—Father, Son, and Holy
                            Spirit (Matthew 28:19, 2 Corinthians 13:14) equally
                            deserving worship and obedience.
                          </p>
                        }
                      />

                      <SingleTeaching
                        id='9'
                        title='God the Father'
                        desc={
                          <>
                            <p>
                              We teach that God the Father, the first Person of
                              the Trinity, orders and disposes all things
                              according to His own purpose and grace (Psalm
                              145:8-9, 1 Corinthians 8:6)
                            </p>
                            <br />
                            <p>
                              He is the Creator of all things (Genesis 1:1-31,
                              Ephesians 3:9) As the only absolute and omnipotent
                              Ruler in the universe, He is sovereign in
                              creation, providence, and redemption (Psalm
                              103:19, Romans 11:36)
                            </p>
                            <br />
                            <p>
                              His fatherhood involves both His designation
                              within the Trinity and His relationship with
                              mankind. As Creator He is Father to all men
                              (Ephesians 4:6) but He is spiritual Father only to
                              believers (Romans 8:14, 2 Corinthians 6:18)
                            </p>
                            <br />
                            <p>
                              He has decreed for His own glory all things that
                              come to pass (Ephesians 1:11)
                            </p>
                            <p>
                              He continually upholds, directs, and governs all
                              creatures and events (1 Chronicles 29:11)
                            </p>
                            <br />
                            <p>
                              In His sovereignty He is neither author nor
                              approver of sin (Habakkuk 1:13, John 8:38-47) nor
                              does He abridge the accountability of moral,
                              intelligent creatures (1 Peter 1:17)
                            </p>
                            <br />
                            <p>
                              He has graciously chosen from eternity past those
                              whom He would have as His own (Ephesians 1:4-6)
                            </p>
                            <br />
                            <p>
                              He saves from sin all who come to Him through
                              Jesus Christ; He adopts as his own all those who
                              come to Him; and He becomes, upon adoption, Father
                              to His own (John 1:12, Romans 8:15, Galatians 4:5,
                              Hebrews 12:5-9)
                            </p>
                            <br />
                          </>
                        }
                      />

                      <SingleTeaching
                        id='10'
                        title='God the Son'
                        desc={
                          <>
                            <p>
                              We teach that Jesus Christ, the second Person of
                              the Trinity, possesses all the divine attributes,
                              and in these He is coequal, consubstantial, and
                              coeternal with the Father (John 10:30; 14:9)
                            </p>
                            <br />
                            <p>
                              We teach that God the Father created according to
                              His own will, through His Son, Jesus Christ, by
                              whom all things continue in existence and in
                              operation (John 1:3, Colossians 1:15 17, Hebrews
                              1:2)
                            </p>
                            <br />
                            <p>
                              We teach that in the incarnation (God becoming
                              man) Christ surrendered only the prerogatives of
                              deity but nothing of the divine essence, either in
                              degree or kind. In His incarnation, the eternally
                              existing second Person of the Trinity accepted all
                              the essential characteristics of humanity and so
                              became the God Man (Philippians 2:5-8, Colossians
                              2:9)
                            </p>
                            <br />
                            <p>
                              We teach that Jesus Christ represents humanity and
                              deity in indivisible oneness (Micah 5:2, John
                              5:23; 14:9-10, Colossians 2:9)
                            </p>
                            <br />
                            <p>
                              We teach that our Lord Jesus Christ was virgin
                              born (Isaiah 7:14, Matthew 1:23; 25, Luke 1:26 35)
                              that He was God incarnate (John 1:1, 14) and that
                              the purpose of the incarnation was to reveal God,
                              redeem men, and rule over God's kingdom (Psalm
                              2:7-9, Isaiah 9:6, John 1:29, Philippians 2:9-11,
                              Hebrews 7:25-26, 1 Peter 1:18-19)
                            </p>
                            <br />
                            <p>
                              We teach that, in the incarnation, the second
                              person of the Trinity laid aside His right to the
                              full prerogatives of coexistence with God and took
                              on an existence appropriate to a servant while
                              never divesting Himself of His divine attributes
                              (Philippians 2:5-8)
                            </p>
                            <br />
                            <p>
                              We teach that our Lord Jesus Christ accomplished
                              our redemption through the shedding of His blood
                              and sacrificial death on the cross and that His
                              death was voluntary, vicarious, substitutionary,
                              propitiatory, and redemptive (John 10:15, Romans
                              3:24-25; 5:8, 1 Peter 2:24)
                            </p>
                            <br />
                            <p>
                              We teach that on the basis of the efficacy of the
                              death of our Lord Jesus Christ, the believing
                              sinner is freed from the punishment, the penalty,
                              the power, and one day the very presence of sin;
                              and that he is declared righteous, given eternal
                              life, and adopted into the family of God (Romans
                              3:25; 5:8-9, 2 Corinthians 5:14-15, 1 Peter 2:24;
                              3:18)
                            </p>
                            <br />
                            <p>
                              We teach that our justification is made sure by
                              His literal, physical resurrection from the dead
                              and that He is now ascended to the right hand of
                              the Father, where He now mediates as our Advocate
                              and High Priest (Matthew 28:6, Luke 24:38-39, Acts
                              2:30-31, Romans 4:25; 8:34, Hebrews 7:25; 9:24, 1
                              John 2:1)
                            </p>
                            <br />
                            <p>
                              We teach that in the resurrection of Jesus Christ
                              from the grave, God confirmed the deity of His Son
                              and gave proof that God has accepted the atoning
                              work of Christ on the cross. Jesus' bodily
                              resurrection is also the guarantee of a future
                              resurrection life for all believers (John 5:26-29;
                              14:19, Romans 1:4; 4:25; 6:5-10, 1 Corinthians
                              15:20, 23)
                            </p>
                            <br />
                            <p>
                              We teach that Jesus Christ will return to receive
                              the church, which is His Body, unto Himself at the
                              rapture, and returning with His church in glory,
                              will establish His millennial kingdom on earth
                              (Acts 1:9-11, 1 Thessalonians 4:13-18, Revelation
                              20)
                            </p>
                            <br />
                            <p>
                              We teach that the Lord Jesus Christ is the One
                              through whom God will judge all mankind (John
                              5:22-23 - Believers , 1 Corinthians 3:10-15, 2
                              Corinthians 5:10) Living inhabitants of the earth
                              at His glorious return (Matthew 25:31-46)
                              Unbelieving dead at the Great White Throne
                              (Revelation 20:11-15) As the Mediator between God
                              and man (1 Timothy 2:5) the Head of His Body the
                              church (Ephesians 1:22; 5:23, Colossians 1:18) and
                              the coming universal King, who will reign on the
                              throne of David (Isaiah 9:6, Luke 1:31-33)
                            </p>
                            <br />
                            <p>
                              He is the final Judge of all who fail to place
                              their trust in Him as Lord and Savior (Matthew
                              25:14-46, Acts 17:30-31)
                            </p>
                            <br />
                          </>
                        }
                      />

                      <SingleTeaching
                        id='11'
                        title='God the Holy Spirit'
                        desc={
                          <>
                            <p>
                              We teach that the Holy Spirit is a divine Person,
                              eternal, possessing all the attributes of
                              personality and deity, including intellect (1
                              Corinthians 2:10-13), emotions (Ephesians 4:30),
                              will (1 Corinthians 12:11), eternality (Hebrews
                              9:14), omnipresence (Psalm 139:7-10), omniscience
                              (Isaiah 40:13-14), omnipotence (Romans 15:13), and
                              truthfulness (John 16:13).
                            </p>
                            <br />
                            <p>
                              In all the divine attributes He is coequal and
                              consubstantial with the Father and the Son
                              (Matthew 28:19, Acts 5:3-4; 28:25-26, 1
                              Corinthians 12:4-6, 2 Corinthians 13:14, Jeremiah
                              31:31-34, Hebrews 10:15-17) teach that it is the
                              work of the Holy Spirit to execute the divine will
                              with relation to all mankind.
                            </p>
                            <br />
                            <p>
                              We recognize His sovereign activity in creation
                              (Genesis 1:2) the incarnation (Matthew 1:18) the
                              written revelation (2 Peter 1:20-21) and the work
                              of salvation (John 3:5-7)
                            </p>
                            <br />
                            <p>
                              We teach that the work of the Holy Spirit in this
                              age began at Pentecost when He came from the
                              Father as promised by Christ (John 14:16-17;
                              15:26) to initiate and complete the building of
                              the Body of Christ, which is His church (1
                              Corinthians 12:13).
                            </p>
                            <br />
                            <p>
                              The broad scope of His divine activity includes
                              convicting the world of sin, of righteousness, and
                              of judgment; glorifying the Lord Jesus Christ and
                              transforming believers into the image of Christ
                              (John 16:7-9, Acts 1:5; 2:4, Romans 8:29, 2
                              Corinthians 3:18, Ephesians 2:22)
                            </p>
                            <br />
                            <p>
                              We teach that the Holy Spirit is the supernatural
                              and sovereign Agent in regeneration, baptizing all
                              believers into the Body of Christ (1 Corinthians
                              12:13). The Holy Spirit also indwells, sanctifies,
                              instructs, empowers them for service, and seals
                              them unto the day of redemption (Romans 8:9, 2
                              Corinthians 3:6, Ephesians 1:13).
                            </p>
                            <br />
                            <p>
                              We teach that the Holy Spirit is the divine
                              Teacher, who guided the apostles and prophets into
                              all truth as they committed to writing God's
                              revelation, the Bible (2 Peter 1:19-21)
                            </p>
                            <br />
                            <p>
                              Every believer possesses the indwelling presence
                              of the Holy Spirit from the moment of salvation,
                              and it is the duty of all those born of the Spirit
                              to be filled with (controlled by) the Spirit (John
                              16:13, Romans 8:9, Ephesians 5:18, 1 John 2:20,
                              27)
                            </p>
                            <br />
                            <p>
                              We teach that the Holy Spirit administers
                              spiritual gifts to the church. The Holy Spirit
                              glorifies neither Himself nor His gifts by
                              ostentatious displays, but He does glorify Christ
                              by implementing His work of redeeming the lost and
                              building up believers in the most holy faith (John
                              16:13-14, Acts 1:8, 1 Corinthians 12:4-11, 2
                              Corinthians 3:18)
                            </p>
                            <br />
                            <p>
                              We teach, in this respect, that God the Holy
                              Spirit is sovereign in the bestowing of all His
                              gifts for the perfecting of the saints today, and
                              that speaking in tongues and the working of sign
                              miracles in the beginning days of the church were
                              for the purpose of pointing to and authenticating
                              the apostles as revealers of divine truth, and
                              were never intended to be characteristic of the
                              lives of believers (1 Corinthians 12:4-11;
                              13:8-10, 2 Corinthians 12:12, Ephesians 4:7 12;
                              Hebrews 2:1-4).
                            </p>
                          </>
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className='tab-pane fade' id='wwt-man' role='tabpanel'>
                  <div className='faq-accordion'>
                    <div className='accordion'>
                      <SingleTeaching
                        show={true}
                        id='8'
                        title='Man'
                        desc={
                          <>
                            <p>
                              We teach that man was directly and immediately
                              created by God in His image and likeness. Man was
                              created free of sin with a rational nature,
                              intelligence, volition, self-determination, and
                              moral responsibility to God (Genesis 2:7, 15-25,
                              James 3:9)
                            </p>
                            <br />
                            <p>
                              We teach that God's intention in the creation of
                              man was that man should glorify God, enjoy God's
                              fellowship, live his life in the will of God, and
                              by this accomplish God's purpose for man in the
                              world (Isaiah 43:7, Colossians 1:16, Revelation
                              4:11)
                            </p>
                            <br />
                            <p>
                              We teach that in Adam's sin of disobedience to the
                              revealed will and Word of God, man lost his
                              innocence, incurred the penalty of spiritual and
                              physical death, became subject to the wrath of
                              God, and became inherently corrupt and utterly
                              incapable of choosing or doing that which is
                              acceptable to God apart from divine grace.
                            </p>
                            <br />
                            <p>
                              With no recuperative powers to enable him to
                              recover himself, man is hopelessly lost. Man's
                              salvation is thereby wholly of God's grace through
                              the redemptive work of our Lord Jesus Christ
                              (Genesis 2:16-17; 3:1-19, John 3:36, Romans 3:23;
                              6:23, 1 Corinthians 2:14, Ephesians 2:1-3, 1
                              Timothy 2:13-14, 1 John 1:8)
                            </p>
                            <br />
                            <p>
                              We teach that, because all men were in Adam, a
                              nature corrupted by Adam's sin has been
                              transmitted to all men of all ages, Jesus Christ
                              being the only exception. All men are thus sinners
                              by nature, by choice, and by divine declaration
                              (Psalm 14:1-3, Jeremiah 17:9, Romans 3:9-18, 23;
                              5:10-12).
                            </p>
                          </>
                        }
                      />
                    </div>
                  </div>
                </div>

                <div
                  className='tab-pane fade'
                  id='wwt-salvation'
                  role='tabpanel'
                >
                  <div className='faq-accordion'>
                    <div className='accordion'>
                      <SingleTeaching
                        show={true}
                        id='14'
                        title='Salvation'
                        desc={
                          <p>
                            We teach that salvation is wholly of God by grace on
                            the basis of the redemption of Jesus Christ, the
                            merit of His shed blood, and not on the basis of
                            human merit or works (John 1:12, Ephesians 1:7;
                            2:8-10, 1 Peter 1:18-19).
                          </p>
                        }
                      />

                      <SingleTeaching
                        id='15'
                        title='Regeneration'
                        desc={
                          <>
                            <p>
                              We teach that regeneration is a supernatural work
                              of the Holy Spirit by which the divine nature and
                              divine life are given (John 3:3-7, Titus 3:5).
                            </p>
                            <br />
                            <p>
                              It is instantaneous and is accomplished solely by
                              the power of the Holy Spirit through the
                              instrumentality of the Word of God (John 5:24)
                              when the repentant sinner, as enabled by the Holy
                              Spirit, responds in faith to the divine provision
                              of salvation.
                            </p>
                            <br />
                            <p>
                              Genuine regeneration is manifested by fruits
                              worthy of repentance as demonstrated in righteous
                              attitudes and conduct. Good works are the proper
                              evidence and fruit of regeneration (1 Corinthians
                              6:19-20, Ephesians 2:10) and will be experienced
                              to the extent that the believer submits to the
                              control of the Holy Spirit in his life through
                              faithful obedience to the Word of God (Ephesians
                              5:17-21, Philippians 2:12b, Colossians 3:16, 2
                              Peter 1:4-10).
                            </p>
                            <br />
                            <p>
                              This obedience causes the believer to be
                              increasingly conformed to the image of our Lord
                              Jesus Christ (2 Corinthians 3:18). Such a
                              conformity is climaxed in the believer's
                              glorification at Christ's coming (Romans 8:17, 2
                              Peter 1:4, 1 John 3:2-3).
                            </p>
                          </>
                        }
                      />

                      <SingleTeaching
                        id='16'
                        title='Election'
                        desc={
                          <>
                            <p>
                              We teach that election is the act of God by which,
                              before the foundation of the world, He chose in
                              Christ those whom He graciously regenerates,
                              saves, and sanctifies (Romans 8:28-30, Ephesians
                              1:4-11, 2 Thessalonians 2:13, 2 Timothy 2:10, 1
                              Peter 1:1-2).
                            </p>
                            <br />
                            <p>
                              We teach that sovereign election does not
                              contradict or negate the responsibility of man to
                              repent and trust Christ as Savior and Lord
                              (Ezekiel 18:23, 32; 33:11, John 3:18-19, 36; 5:40;
                              Romans 9:22-23, 2 Thessalonians 2:10-12,
                              Revelation 22:17)
                            </p>
                            <br />
                            <p>
                              Nevertheless, since sovereign grace includes the
                              means of receiving the gift of salvation as well
                              as the gift itself, sovereign election will result
                              in what God determines. All whom the Father calls
                              to Himself will come in faith and all who come in
                              faith the Father will receive (John 6:37-40, 44,
                              Acts 13:48, James 4:8)
                            </p>
                            <br />
                            <p>
                              We teach that the unmerited favor that God grants
                              to totally depraved sinners is not related to any
                              initiative of their own part or to God's
                              anticipation of what they might do by their own
                              will, but is solely of His sovereign grace and
                              mercy (Ephesians 1:4-7, Titus 3:4-7, 1 Peter 1:2)
                            </p>
                            <br />
                            <p>
                              We teach that election should not be looked upon
                              as based merely on abstract sovereignty. God is
                              truly sovereign, but He exercises this sovereignty
                              in harmony with His other attributes, especially
                              His omniscience, justice, holiness, wisdom, grace,
                              and love (Romans 9:11-16).
                            </p>
                            <br />
                            <p>
                              This sovereignty will always exalt the will of God
                              in a manner totally consistent with His character
                              as revealed in the life of our Lord Jesus Christ
                              (Matthew 11:25-28, 2 Timothy 1:9)
                            </p>
                          </>
                        }
                      />

                      <SingleTeaching
                        id='17'
                        title='Justification'
                        desc={
                          <>
                            <p>
                              We teach that justification before God is an act
                              of God (Romans 8:33) by which He declares
                              righteous those who, through faith in Christ,
                              repent of their sins (Luke 13:3, Acts 2:38; 3:19;
                              11:18, Romans 2:4, 2 Corinthians 7:10, Isaiah
                              55:6-7) and confess Him as sovereign Lord (Romans
                              10:9-10, 1 Corinthians 12:3, 2 Corinthians 4:5,
                              Philippians 2:11)
                            </p>
                            <br />
                            <p>
                              This righteousness is apart from any virtue or
                              work of man (Romans 3:20; 4:6) and involves the
                              imputation of our sins to Christ (Colossians 2:14,
                              1 Peter 2:24) and the imputation of Christ's
                              righteousness to us (1 Corinthians 1:30, 2
                              Corinthians 5:21)
                            </p>
                            <br />
                            <p>
                              By this means God is enabled to "be just and the
                              justifier of the one who has faith in Jesus"
                              (Romans 3:26)
                            </p>
                          </>
                        }
                      />

                      <SingleTeaching
                        id='18'
                        title='Sanctification'
                        desc={
                          <>
                            <p>
                              We teach that every believer is sanctified (set
                              apart) unto God by justification and is therefore
                              declared to be holy and is therefore identified as
                              a saint. This sanctification is positional and
                              instantaneous and should not be confused with
                              progressive sanctification. This sanctification
                              has to do with the believer's standing, not his
                              present walk or condition (Acts 20:32, 1
                              Corinthians 1:2, 30; 6:11; 2 Thessalonians 2:13,
                              Hebrews 2:11; 3:1; 10:10, 14; 13:12; 1 Peter 1:2).
                            </p>
                            <br />
                            <p>
                              We teach that there is also, by the work of the
                              Holy Spirit, a progressive sanctification by which
                              the state of the believer is brought closer to the
                              standing the believer positionally enjoys through
                              justification. Through obedience to the Word of
                              God and the empowering of the Holy Spirit, the
                              believer is able to live a life of increasing
                              holiness in conformity to the will of God,
                              becoming more and more like our Lord Jesus Christ
                              (John 17:17,19, Romans 6:1-22, 2 Corinthians 3:18,
                              1 Thessalonians 4:3-4; 5:23).
                            </p>
                            <br />
                            <p>
                              In this respect, we teach that every saved person
                              is involved in a daily conflict—the new creation
                              in Christ doing battle against the flesh—but
                              adequate provision is made for victory through the
                              power of the indwelling Holy Spirit. The struggle
                              nevertheless stays with the believer all through
                              this earthly life and is never completely ended.
                              All claims to the eradication of sin in this life
                              are unscriptural. Eradication of sin is not
                              possible, but the Holy Spirit does provide for
                              victory over sin (Galatians 5:16-25, Ephesians
                              4:22-24, Philippians 3:12, Colossians 3:9-10, 1
                              Peter 1:14-16, 1 John 3:5-9).
                            </p>
                          </>
                        }
                      />

                      <SingleTeaching
                        id='19'
                        title='Security'
                        desc={
                          <>
                            <p>
                              We teach that all the redeemed, once saved, are
                              kept by God's power and are thus secure in Christ
                              forever (John 5:24; 6:37-40; 10:27-30, Romans
                              5:9-10; 8:1, 31-39; 1 Corinthians 1:4-8, Ephesians
                              4:30, Hebrews 7:25; 13:5, 1 Peter 1:5, Jude 24)
                              teach that it is the privilege of believers to
                              rejoice in the assurance of their salvation
                              through the testimony of God's Word, which,
                              however, clearly forbids the use of Christian
                              liberty as an occasion for sinful living and
                              carnality (Romans 6:15-22; 13:13-14, Galatians
                              5:13, 25-26, Titus 2:11-14).
                            </p>
                          </>
                        }
                      />

                      <SingleTeaching
                        id='20'
                        title='Separation'
                        desc={
                          <>
                            <p>
                              We teach that separation from sin is clearly
                              called for throughout the Old and New Testaments,
                              and that the Scriptures clearly indicate that in
                              the last days apostasy and worldliness shall
                              increase (2 Corinthians 6:14-7:1 2 Timothy 3:1-5).
                            </p>
                            <br />
                            <p>
                              teach that out of deep gratitude for the
                              undeserved grace of God granted to us, and because
                              our glorious God is so worthy of our total
                              consecration, all the saved should live in such a
                              manner as to demonstrate our adoring love to God
                              and so as not to bring reproach upon our Lord and
                              Savior.
                            </p>
                            <br />
                            <p>
                              We also teach that separation from all religious
                              apostasy and worldly and sinful practices is
                              commanded of us by God (Romans 12:1-2, 1
                              Corinthians 5:9-13, 2 Corinthians 6:14-7:1, 1 John
                              2:15-17, 2 John 9-11).
                            </p>
                            <br />
                            <p>
                              We teach that believers should be separated unto
                              our Lord Jesus Christ (2 Thessalonians 1:11-12,
                              Hebrews 12:1-2) and affirm that the Christian life
                              is a life of obedient righteousness that reflects
                              the teaching of the Beatitudes (Matthew 5:2-12)
                              and a continual pursuit of holiness (Romans
                              12:1-2, 2 Corinthians 7:1, Hebrews 12:14, Titus
                              2:11-14, 1 John 3:1-10).
                            </p>
                          </>
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className='tab-pane fade' id='wwt-church' role='tabpanel'>
                  <div className='faq-accordion'>
                    <div className='accordion'>
                      <SingleTeaching
                        show={true}
                        id='21'
                        title='The Church'
                        desc={
                          <>
                            <p>
                              We teach that all who place their faith in Jesus
                              Christ are immediately placed by the Holy Spirit
                              into one united spiritual Body, the church (1
                              Corinthians 12:12-13) the bride of Christ (2
                              Corinthians 11:2, Ephesians 5:23-32, Revelation
                              19:7-8) of which Christ is the Head (Ephesians
                              1:22; 4:15, Colossians 1:18).
                            </p>
                            <br />
                            <p>
                              We teach that the formation of the church, the
                              Body of Christ, began on the Day of Pentecost
                              (Acts 2:1-21, 38-47) and will be completed at the
                              coming of Christ for His own at the rapture (1
                              Corinthians 15:51-52,1 Thessalonians 4:13-18)
                            </p>
                            <br />
                            <p>
                              We teach that the church is thus a unique
                              spiritual organism designed by Christ, made up of
                              all born-again believers in this present age
                              (Ephesians 2:11-3:6)
                            </p>
                            <br />
                            <p>
                              The church is distinct from Israel (1 Corinthians
                              10:32) a mystery not revealed until this age
                              (Ephesians 3:1-6; 5:32)
                            </p>
                            <br />
                            <p>
                              We teach that the establishment and continuity of
                              local churches is clearly taught and defined in
                              the New Testament Scriptures (Acts 14:23, 27;
                              20:17, 28, Galatians 1:2, Philippians 1:1, 1
                              Thessalonians 1:1, 2 Thessalonians 1:1) and that
                              the members of the one spiritual Body are directed
                              to associate themselves together in local
                              assemblies (1 Corinthians 11:18-20, Hebrews 10:25)
                            </p>
                            <br />
                            <p>
                              We teach that the one supreme authority for the
                              church is Christ (1 Corinthians 11:3, Ephesians
                              1:22, Colossians 1:18) and that church leadership,
                              gifts, order, discipline, and worship are all
                              appointed through His sovereignty as found in the
                              Scriptures.
                            </p>
                            <br />
                            <p>
                              The biblically designated officers serving under
                              Christ and over the assembly are elders and
                              deacons, both of whom must meet biblical
                              qualifications (1 Timothy 3:1-13, Titus 1:5-9, 1
                              Peter 5:1-5).
                            </p>
                            <br />
                            <p>
                              We teach that these leaders lead or rule as
                              servants of Christ (1 Timothy 5:17-22) and have
                              His authority in directing the church. The
                              congregation is to submit to their leadership
                              (Hebrews 13:7, 17)
                            </p>
                            <br />
                            <p>
                              We teach the importance of discipleship (Matthew
                              28:19-20, 2 Timothy 2:2) mutual accountability of
                              all believers to each other (Matthew 18:5-14) as
                              well as the need for discipline of sinning members
                              of the congregation in accord with the standards
                              of Scripture (Matthew 18:15-22, Acts 5:1-11, 1
                              Corinthians 5:1-13, 2 Thessalonians 3:6-15, 1
                              Timothy 1:19-20, Titus 1:10-16).
                            </p>
                            <br />
                            <p>
                              We teach the autonomy of the local church, free
                              from any external authority or control, with the
                              right of self-government and freedom from the
                              interference of any hierarchy of individuals or
                              organizations (Titus 1:5).
                            </p>
                            <br />
                            <p>
                              We teach that it is scriptural for true churches
                              to cooperate with each other for the presentation
                              and propagation of the faith. Each local church,
                              however, through its elders and their
                              interpretation and application of Scripture,
                              should be the sole judge of the measure and method
                              of its cooperation. The elders should determine
                              all other matters of membership, policy,
                              discipline, benevolence, and government as well
                              (Acts 15:19-31; 20:28, 1 Corinthians 5:4-7, 13, 1
                              Peter 5:1-4).
                            </p>
                            <br />
                            <p>
                              We teach that the purpose of the church is to
                              glorify God (Ephesians 3:21) by building itself up
                              in the faith (Ephesians 4:13-16) by instruction of
                              the Word (2 Timothy 2:2, 15; 3:16-17), by
                              fellowship (Acts 2:47, 1 John 1:3) by keeping the
                              ordinances (Luke 22:19, Acts 2:38-42) and by
                              advancing and communicating the gospel to the
                              entire world (Matthew 28:19, Acts 1:8; 2:42).
                            </p>
                            <br />
                            <p>
                              We teach the calling of all saints to the work of
                              service (1 Corinthians 15:58, Ephesians 4:12,
                              Revelation 22:12).
                            </p>
                            <br />
                            <p>
                              We teach the need of the church to cooperate with
                              God as He accomplishes His purpose in the world.
                              To that end, He gives the church spiritual gifts.
                              He gives men chosen for the purpose of equipping
                              the saints for the work of the ministry (Ephesians
                              4:7-12) and He also gives unique and special
                              spiritual abilities to each member of the Body of
                              Christ (Romans 12:5-8, 1 Corinthians 12:4-31, 1
                              Peter 4:10-11).
                            </p>
                            <br />
                            <p>
                              We teach that there were two kinds of gifts given
                              the early church: miraculous gifts of divine
                              revelation and healing, given temporarily in the
                              apostolic era for the purpose of confirming the
                              authenticity of the apostles' message (Hebrews
                              2:3-4, 2 Corinthians 12:12) and ministering gifts,
                              given to equip believers for edifying one another.
                              With the New Testament revelation now complete,
                              Scripture becomes the sole test of the
                              authenticity of a man's message, and confirming
                              gifts of a miraculous nature are no longer
                              necessary to validate a man or his message (1
                              Corinthians 13:8-12)
                            </p>
                            <br />
                            <p>
                              Miraculous gifts can even be counterfeited by
                              Satan so as to deceive even believers (1
                              Corinthians 13:13-14:12, Revelation 13:13-14). The
                              only gifts in operation today are those
                              non-revelatory equipping gifts given for
                              edification (Romans 12:6-8).
                            </p>
                            <br />
                            <p>
                              We teach that no one possesses the gift of healing
                              today, but that God does hear and answer the
                              prayer of faith and will answer in accordance with
                              His own perfect will for the sick, suffering, and
                              afflicted (Luke 18:1-6, John 5:7-9, 2 Corinthians
                              12:6-10, James 5:13-16, 1 John 5:14-15).
                            </p>
                            <br />
                            <p>
                              We teach that two ordinances have been committed
                              to the local church: baptism and the Lord's Supper
                              (Acts 2:38-42) Christian baptism by immersion
                              (Acts 8:36-39) is the solemn and beautiful
                              testimony of a believer showing forth his faith in
                              the crucified, buried, and risen Savior, and his
                              union with Him in death to sin and resurrection to
                              a new life (Romans 6:1-11). It is also a sign of
                              fellowship and identification with the visible
                              Body of Christ (Acts 2:41-42).
                            </p>
                            <br />
                            <p>
                              We teach that the Lord's Supper is the
                              commemoration and proclamation of His death until
                              He comes, and should be always preceded by solemn
                              self-examination (1 Corinthians 11:28-32).
                            </p>
                            <br />
                            <p>
                              We also teach that, whereas the elements of
                              Communion are only representative of the flesh and
                              blood of Christ, the Lord's Supper is nevertheless
                              an actual communion with the risen Christ who
                              indwells every believer, and so is present,
                              fellowshipping with His people (1 Corinthians
                              10:16).
                            </p>
                          </>
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className='tab-pane fade' id='wwt-angels' role='tabpanel'>
                  <div className='faq-accordion'>
                    <div className='accordion'>
                      <SingleTeaching
                        show={true}
                        id='22'
                        title='Holy Angels'
                        desc={
                          <p>
                            We teach that angels are created beings and are
                            therefore not to be worshiped. Although they are a
                            higher order of creation than man, they are created
                            to serve God and to worship Him (Luke 2:9-14,
                            Hebrews 1:6-7, 14; 2:6-7; Revelation 5:11-14; 19:10;
                            22:9).
                          </p>
                        }
                      />

                      <SingleTeaching
                        id='23'
                        title=' Fallen Angels'
                        desc={
                          <>
                            <p>
                              We teach that Satan is a created angel. He
                              incurred the judgment of God by rebelling against
                              his Creator (Isaiah 14:12-17, Ezekiel 28:11-19) by
                              taking numerous angels with him in his fall
                              (Matthew 25:41, Revelation 12:1-14) and by
                              introducing sin into the human race by his
                              temptation of Eve (Genesis 3:1-15){' '}
                            </p>
                            <br />
                            <p>
                              We teach that Satan is the open and declared enemy
                              of God and man (Isaiah 14:13-14, Matthew 4:1-11,
                              Revelation 12:9-10) that he is the prince of this
                              world, who has been defeated through the death and
                              resurrection of Jesus Christ. (Romans 16:20) and
                              that he shall be eternally punished in the lake of
                              fire (Isaiah 14:12-17, Ezekiel 28:11-19, Matthew
                              25:41, Revelation 20:10).
                            </p>
                          </>
                        }
                      />
                    </div>
                  </div>
                </div>
                <div
                  className='tab-pane fade'
                  id='wwt-lastthings'
                  role='tabpanel'
                >
                  <div className='faq-accordion'>
                    <div className='accordion'>
                      <SingleTeaching
                        show={true}
                        id='24'
                        title='Death'
                        desc={
                          <>
                            <p>
                              We teach that physical death involves no loss of
                              our immaterial consciousness (Revelation 6:9-11)
                              that the soul of the redeemed passes immediately
                              into the presence of Christ (Luke 23:43,
                              Philippians 1:23, 2 Corinthians 5:8) that there is
                              a separation of soul and body (Philippians
                              1:21-24) and that, for the redeemed, such
                              separation will continue until the rapture (1
                              Thessalonians 4:13-17) which initiates the first
                              resurrection (Revelation 20:4-6) when our soul and
                              body will be reunited to be glorified forever with
                              our Lord (Philippians 3:21, 1 Corinthians
                              15:35-44, 50-54). Until that time, the souls of
                              the redeemed in Christ remain in joyful fellowship
                              with our Lord Jesus Christ (2 Corinthians 5:8)
                              teach the bodily resurrection of all men, the
                              saved to eternal life (John 6:39, Romans 8:10-11,
                              19-23, 2 Corinthians 4:14) and the unsaved to
                              judgment and everlasting punishment (Daniel 12:2,
                              John 5:29, Revelation 20:13-15).
                            </p>
                            <br />
                            <p>
                              We teach that the souls of the unsaved at death
                              are kept under punishment until the second
                              resurrection (Luke 16:19-26, Revelation 20:13-15)
                              when the soul and the resurrection body will be
                              united (John 5:28-29). They shall then appear at
                              the Great White Throne Judgment (Revelation
                              20:11-15) and shall be cast into hell, the lake of
                              fire (Matthew 25:41-46) cut off from the life of
                              God forever (Daniel 12:2, Matthew 25:41-46, 2
                              Thessalonians 1:7-9).
                            </p>
                          </>
                        }
                      />

                      <SingleTeaching
                        id='25'
                        title='The Rapture of the church'
                        desc={
                          <p>
                            We teach the personal, bodily return of our Lord
                            Jesus Christ before the seven-year tribulation (1
                            Thessalonians 4:16, Titus 2:13) to translate His
                            church from this earth (John 14:1-3, 1 Corinthians
                            15:51-53, 1 Thessalonians 4:15-5:11) and, between
                            this event and His glorious return with His saints,
                            to reward believers according to their works (1
                            Corinthians 3:11-15, 2 Corinthians 5:10).
                          </p>
                        }
                      />

                      <SingleTeaching
                        id='26'
                        title='The Tribulation period'
                        desc={
                          <p>
                            We teach that immediately following the removal of
                            the church from the earth (John 14:1-3, 1
                            Thessalonians 4:13-18) the righteous judgments of
                            God will be poured out upon an unbelieving world
                            (Jeremiah 30:7, Daniel 9:27; 12:1, 2 Thessalonians
                            2:7-12, Revelation 16) and that these judgments will
                            be climaxed by the return of Christ in glory to the
                            earth (Matthew 24:27-31; 25:31-46, 2 Thessalonians
                            2:7-12). At that time the Old Testament and
                            tribulation saints will be raised and the living
                            will be judged (Daniel 12:2-3, Revelation 20:4-6).
                            This period includes the seventieth week of Daniel's
                            prophecy (Daniel 9:24-27, Matthew 24:15-31;
                            25:31-46).
                          </p>
                        }
                      />

                      <SingleTeaching
                        id='27'
                        title='The Second coming and the Millennial reign'
                        desc={
                          <>
                            <p>
                              We teach that, after the tribulation period,
                              Christ will come to earth to occupy the throne of
                              David (Matthew 25:31, Luke 1:31-33, Acts 1:10-11;
                              2:29-30) and establish His messianic kingdom for a
                              thousand years on the earth (Revelation 20:1-7).
                              During this time the resurrected saints will reign
                              with Him over Israel and all the nations of the
                              earth (Ezekiel 37:21-28, Daniel 7:17-22,
                              Revelation 19:11-16). This reign will be preceded
                              by the overthrow of the Antichrist and the False
                              Prophet, and by the removal of Satan from the
                              world (Daniel 7:17-27, Revelation 20:1-7).
                            </p>
                            <br />
                            <p>
                              We teach that the kingdom itself will be the
                              fulfilment of God's promise to Israel (Isaiah
                              65:17-25, Ezekiel 37:21-28, Zechariah 8:1-17) to
                              restore them to the land which they forfeited
                              through their disobedience (Deuteronomy 28:15-68)
                              The result of their disobedience was that Israel
                              was temporarily set aside (Matthew 21:43, Romans
                              11:1-26) but will again be awakened through
                              repentance to enter into the land of blessing
                              (Jeremiah 31:31-34, Ezekiel 36:22-32, Romans
                              11:25-29).
                            </p>
                            <br />
                            <p>
                              We teach that this time of our Lord's reign will
                              be characterized by harmony, justice, peace,
                              righteousness, and long life (Isaiah 11; 65:17-25,
                              Ezekiel 36:33-38) and will be brought to an end
                              with the release of Satan (Revelation 20:7).
                            </p>
                          </>
                        }
                      />
                      <SingleTeaching
                        id='28'
                        title='The Judgment of the lost'
                        desc={
                          <>
                            <p>
                              We teach that following the release of Satan after
                              the thousand year reign of Christ (Revelation
                              20:7). Satan will deceive the nations of the earth
                              and gather them to battle against the saints and
                              the beloved city, at which time Satan and his army
                              will be devoured by fire from heaven (Revelation
                              20:9). Following this, Satan will be thrown into
                              the lake of fire and brimstone (Matthew 25:41,
                              Revelation 20:10) whereupon Christ, who is the
                              Judge of all men (John 5:22) will resurrect and
                              judge the great and small at the Great White
                              Throne Judgment.
                            </p>
                            <br />
                            <p>
                              We teach that this resurrection of the unsaved
                              dead to judgment will be a physical resurrection,
                              whereupon receiving their judgment (John 5:28-29)
                              they will be committed to an eternal conscious
                              punishment in the lake of fire (Matthew 25:41,
                              Revelation 20:11-15).
                            </p>
                          </>
                        }
                      />
                      <SingleTeaching
                        id='29'
                        title='Eternity'
                        desc={
                          <>
                            <p>
                              We teach that after the closing of the millennium,
                              the temporary release of Satan, and the judgment
                              of unbelievers (2 Thessalonians 1:9, Revelation
                              20:7-15) the saved will enter the eternal state of
                              glory with God, after which the elements of this
                              earth are to be dissolved (2 Peter 3:10) and
                              replaced with a new earth, wherein only
                              righteousness dwells (Ephesians 5:5, Revelation
                              20:15, 21:1-27; 22:1-22).{' '}
                            </p>
                            <br />
                            <p>
                              Following this, the heavenly city will come down
                              out of heaven (Revelation 21:2) and will be the
                              dwelling place of the saints, where they will
                              enjoy forever fellowship with God and one another
                              (John 17:3, Revelation 21-22). Our Lord Jesus
                              Christ, having fulfilled His redemptive mission,
                              will then deliver up the kingdom to God the Father
                              (1 Corinthians 15:24-28) that in all spheres the
                              triune God may reign forever and ever (1
                              Corinthians 15:28).
                            </p>
                          </>
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeTeachArea;
