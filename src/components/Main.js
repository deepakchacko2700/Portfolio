import React from 'react'
import {Box, Grid, Typography,Link, } from '@mui/material';
import {motion} from 'framer-motion'
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../App.css'
import codingImage from '../images/coding.jpg'
import NavBar from './NavBar';

import { Element } from 'react-scroll';

export default function Main() {
    
    return (
        
            <Grid container
                flexDirection='column'
                justifyContent='flex-start'
                alignItems='center'
                boxSizing='border-box'
            >
                <Grid item xs={12} 
                    component={Element}
                    id='Home'
                    // sx={{
                    //     mb: {xs:0, sm:4},
                    // }}
                >
                    <NavBar />
                </Grid>
                <Grid item xs={12} container 
                    sx={{
                        minHeight:'100vh',
                        padding:{xs:'30px 2vw', md:'2px 15vw'},
                        position:'relative'
                    }}
                >
                    <Grid item xs={12} md={6} 
                        alignSelf='center'
                        component={motion.div}
                        initial={{y:-250}}
                        animate={{y:0}}
                        transition={{type:'spring', bounce:0.7, delay:0.5}}
                        sx={{m: {xs:'12vh 10px 5px 10px', md:'auto'}}}
                    >
                        <Typography 
                            sx={{fontFamily:'serif',
                                fontSize:{xs:16, md:22},
                                fontWeight:570,
                                color:'#565657',
                                pb:1,
                                textAlign: {xs:'left', md:'left'}
                            }}
                        >
                            Hello World!
                        </Typography>
                        <Box sx={{
                                display:'flex',
                                justifyContent: {xs:'start', md:'start'}
                            }}
                        >
                            <Typography 
                                sx={{
                                    fontFamily:'serif',
                                    fontSize:{xs:18, md:22},
                                    fontWeight:570,
                                    color:'#565657',
                                    mt:{xs:'-2px', md:0}
                                }}
                            >
                                I am 
                            </Typography>
                            <Typography variant='h5' textAlign='start'
                                component='div'
                                sx={{
                                    fontFamily:'Arial sans-serif',
                                    color:'#60549c',
                                    fontWeight:600,
                                    pl:'0.6rem',
                                    fontSize: {xs:'1.1rem', md:'1.5rem'}
                                }}
                            >
                                DEEPAK CHACKO.
                            </Typography>
                        </Box>
                        <Box  sx={{
                            display:'flex',
                            justifyContent:{xs:'start', md:'start'},
                            }}
                        >
                            <Typography 
                                sx={{
                                    fontFamily:'serif',
                                    fontSize:{xs:18, md:22},
                                    fontWeight:570,
                                    color:'#565657',
                                    mt:{xs:'-2px', md:0}
                                }}
                            >
                               I am a 
                            </Typography>
                            <Typography variant='h5'  textAlign='start'
                                 sx={{
                                    fontFamily:'Arial sans-serif',
                                    color:'#60549c',                                
                                    fontWeight:600,
                                    pl:'0.6rem',
                                    fontSize: {xs:'1.1rem', md:'1.5rem'}
                                }}
                            >
                                FULL STACK DEVELOPER.
                            </Typography>
                            
                        </Box>
                        
                    </Grid>
                    <Grid item xs={12} md={6} justifyContent='center'>
                        <motion.div
                            initial={{filter: 'blur(10px)'}}
                            whileInView={{filter: 'blur(0px)'}}
                            transition={{delay:0.2, duration:1}}
                        >
                            <Box component='img'
                                sx={{
                                    display:'block',
                                    maxWidth:{xs:'90vw', md:'35vw'},
                                    boxSizing:'border-box',
                                    // pl:5,
                                    // backgroundColor:'#232323',
                                    py: {xs:1, md:10}
                                }}
                                alt=''
                                src={codingImage}
                            />
                        </motion.div>

                    </Grid>
                </Grid>
                <Grid item xs={12} 
                    id='About'
                    component={Element}
                    sx={{
                        positon:'relative',
                        width:{xs:'100vw', md:'75vw'},
                        backgroundColor: '#3ea890',
                        color:'#f2f2f2',
                        borderRadius:'15px 15px 0 0 ',
                        "&::after": {
                            content: '""',
                            position:'relative',
                            p:0,
                            display: 'block',
                            width:0,
                            height:0,
                            // top:60,
                            // backgroundColor:'#838383',
                            opacity:1,
                            borderTop: 'solid 50px #3ea890 ',
                            borderLeft: {xs:'solid 100vw white', md:'solid 75.1vw white'},
                        }

                    }}
                >
                    <Typography variant='h4' textAlign='center'
                        component={motion.div}
                        initial={{opacity:0, x:-200}}
                        whileInView={{opacity:1, x:0}}
                        transition={{delay:0.5, duration:0.5}}
                        fontWeight={600} 
                        fontFamily='serif'
                        sx={{
                            mt : {xs:5, md:15}
                        }}
                    >
                        About Me
                    </Typography>
                    <Box 
                        component={motion.div}
                        initial={{opacity:0, x:200}}
                        whileInView={{opacity:1, x:0}}
                        transition={{delay:0.5, duration:0.5}}
                        sx={{
                            mx:{xs:2, md:20},
                            mt:4,
                            mb:{xs:3,md:12},
                            position:'relative',                       
                        }}
                    >
                        <Typography variant='body1' sx={{fontSize:19, fontFamily:' Helvetica Verdana sans-serif', color:'#ebf0f7'}}>
                            I am a self taught computer programmer. My education background is in
                            Physical Science and I am a post graduate in the same. Also I have worked as 
                            a tutor for a couple of years. My acquanitance with programming begins during my 
                            master's days. I learned Python for simulation works of a project. 
                            Since then I carry on learning fundamentals of programming and did small projects
                            in Python.
                       
                            As I got interested in web development, I moved forward by picking 
                            web framework Django and database query language sql. I completed a number of 
                            projects using both. Then I felt the need to study JavaScript to fully unleash
                            the power of web. Learning JS was comparatevely easy because it was more or less
                            similar to Python.  And the last acquired tool in this journey was React JS.
                            Way more ahead and I am optimistic.
                        </Typography>

                    </Box>                
                </Grid>

                {/* Skills */}
                <Grid item xs={12} container 
                    id="Skills"
                    component={Element}
                    sx={{
                        justifyContent:'center',
                        m: {xs:'50px auto', md:'100px auto'},
                        px:{xs:3, md:0},
                        columnGap:'30px',
                        rowGap:'20px',
                    }}
                >
                    <Grid item xs={12} >
                        <Typography variant='h4' textAlign='center'
                             fontWeight={600} 
                             fontFamily='serif'
                             color='#50444a'
                             sx={{
                                mt:{xs:2,md:8},
                                pb:{xs:2 ,md:10},
                             }}
                        >
                            Skills I got
                        </Typography>
                    </Grid>
                   
                    <Grid item xs={12}  md='auto' container 
                        justifyContent='space-evenly'
                        component={motion.div}
                        initial={{opacity:0, x:-50}}
                        whileInView={{opacity:1, x:0}}
                        transition={{delay:0.2, duration:0.3}} 
                        borderRadius={1}
                        boxShadow={3}  
                        sx={{
                            minHeight: {xs:180},
                        }}  
                    >

                            <Grid item xs={12}
                                sx={{
                                    backgroundColor:'#3ea890',
                                    color:'#f2f2f2',
                                    boxShadow:'0 0 1px #3ea890',
                                    height: '30%',
                                    paddingY:2,
                                }}
                             >
                                <Typography variant='h5' textAlign='center'>
                                     Backend
                                </Typography>
                            </Grid>
                            <Grid item mr={2}  >
                                <Box  textAlign='center' className='skill-item'>
                                    <img src={require('../images/Python.png')}
                                        alt='Python'
                                        width={30}
                                        margin='auto'
                                    />
                                    <Typography variant='body2' textAlign='start'>
                                        Python
                                    </Typography>
                                </Box>
                            </Grid>
                            
                            <Grid item mr={2} textAlign='center' className='skill-item'>
                                <Box component='img'
                                    src={require('../images/Django.png')}
                                    alt='Django'
                                    maxWidth={30}
                                />
                                <Typography variant='body2'
                                    sx={{
                                        fontWeight:'500',
                                    }}
                                >
                                    Django
                                </Typography>
                            </Grid>
                            
                            <Grid item mr={2} textAlign='center' className='skill-item'>
                                <Box component='img'
                                    src={require('../images/Django REST.png')}
                                    alt='DRF'
                                    maxWidth={30}
                                    backgroundColor='#fff'
                                />
                                <Typography variant='body2'>
                                    DRF
                                </Typography>
                            </Grid>
                            
                            <Grid item textAlign='center' className='skill-item'>
                                <Box 
                                    component='img'
                                    src={require('../images/Flask.png')}
                                    alt='Flask'
                                    maxWidth={30}
                                />
                                <Typography variant='body2'>
                                    Flask
                                </Typography>
                            </Grid>
                            
                        </Grid>

                        <Grid item xs={12}  md='auto' container 
                            justifyContent='space-evenly'
                            borderRadius={1}
                            boxSizing='border-box'
                            minHeight={180}
                            boxShadow={2}   
                            component={motion.div}
                            initial={{opacity:0, x:-50}}
                            whileInView={{opacity:1, x:0}}
                            transition={{ delay:0.3, duration:0.3}}          
                        > 
                            
                            <Grid item xs={12}  textAlign='center'
                                sx={{
                                    backgroundColor:'#3ea890',
                                    color:'#f2f2f2',
                                    boxShadow:'0 0 1px #3ea890',
                                    height: '30%',
                                    paddingY:2,
                                }}
                            >
                                <Typography variant='h5'>
                                    Frontend
                                </Typography>
                            </Grid>

                            <Grid item  mr={2} textAlign='center' className='skill-item'>
                                <Box component='img'
                                    src={require('../images/JavaScript.png')}
                                    alt='JavaScript'
                                    width={30}
                                />
                                <Typography variant='body2' >
                                    JavaScript
                                </Typography>
                            </Grid>

                            <Grid item mr={2} textAlign='center' className='skill-item'>
                                <Box component='img'
                                    src={require('../images/React.png')}
                                    alt='React'
                                    maxWidth={30}
                                    
                                />
                                <Typography variant='body2'>
                                    React
                                </Typography>
                            </Grid>

                            <Grid item mr={2} textAlign='center' className='skill-item'>
                                <Box component='img'
                                    src={require('../images/tailwind.png')}
                                    alt='css'
                                    maxWidth={30}
                                    
                                />
                                <Typography variant='body2'>
                                    Tailwind css
                                </Typography>
                            </Grid>

                            <Grid item textAlign='center' className='skill-item'>
                                <Box component='img'
                                    src={require('../images/Material UI.png')}
                                    alt='Material UI'
                                    maxWidth={30}
                                    
                                />
                                <Typography variant='body2'>
                                    Material UI
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}  md='auto' container
                            justifyContent='space-evenly'
                            borderRadius={1}
                            boxSizing='border-box'
                            minHeight={180}
                            boxShadow={3}     
                            component={motion.div}
                            initial={{opacity:0, x:-50}}
                            whileInView={{opacity:1, x:0}}
                            transition={{ delay:0.5, duration:0.3}}                    
                        >                        

                            <Grid item xs={12} textAlign='center'
                                sx={{
                                    backgroundColor:'#3ea890',
                                    color:'#f2f2f2',
                                    boxShadow:'0 0 1px #3ea890',
                                    height: '30%',
                                    paddingY:2,
                                }}
                            >
                                <Typography variant='h5'>
                                    Others
                                </Typography>
                            </Grid>

                            <Grid item mr={2} textAlign='center' className='skill-item'>
                                <Box component='img'
                                    src={require('../images/MySQL.png')}
                                    alt='MySQL'
                                    maxWidth={30}
                                />
                            
                                <Typography variant='body2'>
                                    MySQL
                                </Typography>
                            </Grid>

                            <Grid item mr={2} textAlign='center' className='skill-item'>
                                <Box component='img'
                                    src={require('../images/MongoDB.png')}
                                    alt='MongoDB'
                                    maxWidth={30}
                                />
                                <Typography variant='body2'>
                                    MongoDB
                                </Typography>
                            </Grid> 

                            <Grid item mr={2} textAlign='center' className='skill-item'>
                                <Box component='img'
                                    src={require('../images/redis.png')}
                                    alt='redis'
                                    maxWidth={30}
                                />
                                <Typography variant='body2'>
                                    Redis
                                </Typography>
                            </Grid> 


                            <Grid item  textAlign='center' className='skill-item'>
                                <Box component='img'
                                    src={require('../images/Git.png')}
                                    alt='git'
                                    maxWidth={30}
                                />
                                <Typography variant='body2'>
                                    Git
                                </Typography>
                            </Grid>               
                        </Grid>

                </Grid>  
                
                {/* Projects */}
                <Grid item xs={12} container
                    id='Projects'
                    component={Element}
                    sx={{
                        flexDirection:'column',
                        margin:'0 auto',
                        width:{xs:'100vw', md:'75vw'},
                        py:{xs:5, md:12},
                        px:2,
                    }}
                >
                    <Box
                         sx={{
                            pb:{xs:2, md:8}
                        }}
                    >
                        <Typography variant='h4' textAlign='center'
                            fontWeight={600} 
                            fontFamily='serif'
                            color='#50444a'
                        >
                            Selected Works
                        </Typography>
                        <Typography variant='subtitle2' textAlign='center'>
                            **Demo may take some time to load as they are hosted in free plans.
                        </Typography>
                    </Box>
                    <Box 
                        component={motion.div}
                        initial={{opacity:0, y:50}}
                        whileInView={{opacity:1, y:0}}
                        transition={{delay:0.2, duration:0.3}}
                        sx={{
                            borderRadius:2,
                            mt:4,
                        }}
                    >
                        <Grid container columnSpacing={8} rowSpacing={1} >
                            <Grid item xs={12} md={6}>
                                <Typography variant='h5' textAlign='center' 
                                    mb={2}
                                    fontWeight={600}
                                    color='#60549c'
                                    sx={{
                                        display:{xs:'block', md:'none'}
                                    }}
                                >
                                    Lively
                                </Typography>
                                <Box component='img'
                                    src={require('../images/projects/social_media.png')}
                                    alt='social_media'
                                    maxWidth='100%'
                                    boxShadow={5}
                                    mt={2}
                                />
                                <Box
                                    sx={{
                                        ml:2,
                                        mt:2,
                                        display:'flex',
                                        justifyContent:'space-evenly',
                                    }}
                                >
                                    <Box>
                                        <Link href='https://dclively.pythonanywhere.com/'
                                            target="_blank" rel="noopener noreferrer"
                                            sx={{
                                                backgroundColor:'#3ea890',
                                                color:'#ffffff',
                                                fontSize:15,
                                                px:1,
                                                py:0.5,
                                                borderRadius:3,
                                                boxShadow:'0 0 1px #3ea890',
                                                cursor:'pointer',
                                                textDecoration:'none',
                                                '@keyframes blink-effect': {
                                                    '0%': {
                                                        backgroundColor:'#3ea890',
                                                        boxShadow:'0 0 1px #3ea890',
                                                    },
                                                    '50%': {
                                                        backgroundColor: '#edfaf5',
                                                        boxShadow:'0 0 10px #edfaf5'
                                                    },
                                                    '100%': {
                                                        backgroundColor:'#3ea890',
                                                        boxShadow:'0 0 1px #3ea890',
                                                    },
                                                },
                                                '&:active': {animation: 'blink-effect 150ms ease '}
                                            }}
                                        >
                                            View Demo
                                        </Link>
                                        <Typography variant='body2' mt={1}>
                                            username : test <br/>
                                            password  : test@123
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Link href='https://github.com/deepakchacko2700/Lively'
                                            target="_blank" rel="noopener noreferrer"
                                        >
                                            View Code
                                        </Link> 
                                    </Box>
                                </Box>

                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box
                                     sx={{
                                        px:2,
                                        py:1,
                                        borderRadius:2
                                    }}
                                >
                                    <Typography variant='h5' textAlign='left' 
                                        mb={2}
                                        fontWeight={600}
                                        color='#60549c'
                                        sx={{
                                            display:{xs:'none', md:'block'}
                                        }}
                                    >
                                        Lively
                                    </Typography>
                                    <Typography variant='body1'  
                                        sx={{
                                            // textAlign: {xs:'center', sm:'left'},
                                            fontSize:19, 
                                            fontFamily:'Arial sans-serif', 
                                            color:'#565657'}}
                                    >
                                        Lively is a social media application. 
                                         You can create your own account
                                        and after log in you can set cool pics as your 
                                        profile, create new updates about you or post your 
                                        new travel pics. You can find and follow your friends
                                        so that you can see,
                                        comment and like their posts. 
                                        <br/>
                                    </Typography>
                                    {/* <Typography variant='subtitle1' textAlign='center' 
                                        sx={{fontFamily:'Copperplate Fantasy', fontSize:19, color:'#60549c'}}
                                    >
                                        Django - DRF - React - Material UI
                                    </Typography> */}
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                    {/*Chat App */}
                    <Box 
                        component={motion.div}
                        initial={{opacity:0, y:50}}
                        whileInView={{opacity:1, y:0}}
                        transition={{delay:0.2, duration:0.3}}
                        sx={{
                            borderRadius:2,
                            mt:{xs:6, md:12},
                        }}
                    >
                        <Grid container columnSpacing={8}  rowSpacing={1}>
                            <Grid item xs={12} md={6}>
                                <Typography variant='h5' textAlign='center' 
                                    mb={2}
                                    fontWeight={600}
                                    color='#60549c'
                                    sx={{
                                        display:{xs:'block', md:'none'}
                                    }}
                                >
                                    Fun Chat
                                </Typography>
                                <Box component='img'
                                    src={require('../images/projects/chat.png')}
                                    alt='chat'
                                    maxWidth='100%'
                                    mt={2}
                                    boxShadow={5}
                                />
                                <Box
                                    sx={{
                                        
                                        mt:2,
                                        display:'flex',
                                        justifyContent:'space-evenly',
                                    }}
                                >
                                    <Box>
                                        <Link href='https://fun-chat-2s6u.onrender.com/'
                                            target="_blank" rel="noopener noreferrer"
                                            sx={{
                                                backgroundColor:'#3ea890',
                                                color:'#ffffff',
                                                fontSize:15,
                                                px:1,
                                                py:0.5,
                                                borderRadius:3,
                                                boxShadow:'0 0 1px #3ea890',
                                                cursor:'pointer',
                                                textDecoration:'none',
                                                '@keyframes blink-effect': {
                                                    '0%': {
                                                        backgroundColor:'#3ea890',
                                                        boxShadow:'0 0 1px #3ea890',
                                                    },
                                                    '50%': {
                                                        backgroundColor: '#edfaf5',
                                                        boxShadow:'0 0 10px #edfaf5'
                                                    },
                                                    '100%': {
                                                        backgroundColor:'#3ea890',
                                                        boxShadow:'0 0 1px #3ea890',
                                                    },
                                                },
                                                '&:active': {animation: 'blink-effect 150ms ease '}
                                            }}
                                        >
                                            View Demo
                                        </Link>
                                        <Box sx={{display:'flex', justifyContent:'space-between'}}>
                                            <Typography variant='body2' mt={1}>
                                                username : user <br/>
                                                password  : user@123
                                            </Typography>
                                            <Typography variant='body2' mt={1} ml={1} pl={1}
                                                sx={{borderLeft:1}}
                                            >
                                                shaji <br/>
                                                shaji@123
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Link href='https://github.com/deepakchacko2700/Chat-App'
                                            target="_blank" rel="noopener noreferrer"
                                        >
                                            View Code
                                        </Link> 
                                    </Box>
                                </Box>

                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box
                                     sx={{
                                        px:2,
                                        py:1,
                                        borderRadius:2
                                    }}
                                >
                                    <Typography variant='h5' textAlign='left' 
                                        mb={1}
                                        fontWeight={600}
                                        color='#60549c'
                                        sx={{
                                            display:{xs:'none', md:'block'}
                                        }}
                                    >
                                        Fun Chat
                                    </Typography>
                                    <Typography variant='body1'  textAlign='left'
                                        sx={{
                                            // textAlign: {xs:'center', sm:'left'},
                                            fontSize:19,
                                            fontFamily:'Arial sans-serif', 
                                            color:'#565657'
                                        }}
                                    >
                                        Fun chat is a live chat application.  You can 
                                        find your freinds, say hi to them and send any text message 
                                        you want. In a nice customised chat page, you can see the chat history
                                        with your friend  and new messages. In the home page, you can view
                                        the active conversations and live notifications from you friends.
                                        <br/>
                                    </Typography>
                                    {/* <Typography variant='subtitle1' textAlign='center' 
                                        sx={{fontFamily:'Copperplate Fantasy', fontSize:19, color:'#60549c'}}
                                    >
                                        Django - DRF - React - Redis - Tailwind CSS
                                    </Typography> */}
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    {/* Ecom App*/}
                    <Box 
                        component={motion.div}
                        initial={{opacity:0, y:50}}
                        whileInView={{opacity:1, y:0}}
                        transition={{delay:0.2, duration:0.3}}
                        sx={{
                            borderRadius:2,
                            mt:{xs:6, md:12},
                        }}
                    >
                        <Grid container columnSpacing={8}  rowSpacing={1}>
                            <Grid item xs={12} md={6}>
                                <Typography variant='h5' textAlign='center' 
                                    mb={2}
                                    fontWeight={600}
                                    color='#60549c'
                                    sx={{
                                        display:{xs:'block', md:'none'}
                                    }}
                                >
                                    Ecom
                                </Typography>
                                <Box component='img'
                                    src={require('../images/projects/ecom.png')}
                                    alt='e_commerce'
                                    maxWidth='100%'
                                    mt={2}
                                    boxShadow={5}
                                />
                                <Box
                                    sx={{
                                        
                                        mt:2,
                                        display:'flex',
                                        justifyContent:'space-evenly',
                                    }}
                                >
                                    <Box>
                                        <Link href='https://dcinmakesecom.pythonanywhere.com/'
                                            target="_blank" rel="noopener noreferrer"
                                            sx={{
                                                backgroundColor:'#3ea890',
                                                color:'#ffffff',
                                                fontSize:15,
                                                px:1,
                                                py:0.5,
                                                borderRadius:3,
                                                boxShadow:'0 0 1px #3ea890',
                                                cursor:'pointer',
                                                textDecoration:'none',
                                                '@keyframes blink-effect': {
                                                    '0%': {
                                                        backgroundColor:'#3ea890',
                                                        boxShadow:'0 0 1px #3ea890',
                                                    },
                                                    '50%': {
                                                        backgroundColor: '#edfaf5',
                                                        boxShadow:'0 0 10px #edfaf5'
                                                    },
                                                    '100%': {
                                                        backgroundColor:'#3ea890',
                                                        boxShadow:'0 0 1px #3ea890',
                                                    },
                                                },
                                                '&:active': {animation: 'blink-effect 500ms ease '}
                                            }}
                                        >
                                            View Demo
                                        </Link>
                                       
                                    </Box>
                                    <Box>
                                        <Link href='https://github.com/deepakchacko2700/ecom_project'
                                            target="_blank" rel="noopener noreferrer"
                                        >
                                            View Code
                                        </Link> 
                                    </Box>
                                </Box>

                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box
                                     sx={{
                                        px:2,
                                        py:1,
                                        borderRadius:2
                                    }}
                                >
                                    <Typography variant='h5' textAlign='left' 
                                        mb={1}
                                        fontWeight={600}
                                        color='#60549c'
                                        sx={{display:{xs:'none', md:'block'}}}
                                    >
                                        Ecom
                                    </Typography>
                                    <Typography variant='body1'  textAlign='left'
                                        sx={{fontSize:19, fontFamily:'Arial sans-serif', color:'#565657'}}
                                    >
                                        Ecom is a shopping application for cloth items. You can view all the 
                                        products in home page. You can go to different categories from nav bar or
                                        search your favorite product. In the product page, you can view details of
                                        the product and add item to the cart. The cart page displays all the purchased products.
                                        <br/>
                                    </Typography>
                                    {/* <Typography variant='subtitle1' textAlign='center'
                                        sx={{fontFamily:'Copperplate Fantasy', fontSize:19, color:'#60549c'}}
                                    >
                                        Django - DRF - React - Redis - Tailwind CSS
                                    </Typography> */}
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid> 

            {/* Contacts*/}
            <Grid item xs={12}
                id="Contact"
                component={Element}
                sx={{
                    backgroundColor:'#232323',
                    color:'#e9f2f0',
                    width:{xs:'100vw', sm:'100vw'},
                    mt:5,
                    py:5
                }}
            >
                <Typography variant='h4' textAlign='center'
                        fontWeight={600} 
                        fontFamily='serif'
                        pb={5}
                        color='#f2f2f2'
                    >
                    Contact 
                </Typography>
                <Box sx={{width: {xs:'70vw', md:'30vw'}, mx:'auto'}}>
                    <Box
                        sx={{
                            display:'flex', 
                            justifyContent:'space-between',
                            columnGap:2
                        }}
                    >
                        <Box sx={{ color:'white'}}>
                            <PhoneIcon />
                        </Box>
                        <Typography variant='body1'>
                            91-8156866866
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display:'flex', 
                            justifyContent:'space-between',
                            columnGap:2
                        }}
                    >
                        <Box sx={{ color:'white'}}>
                            <MailOutlineIcon/>
                        </Box>
                        <Typography variant='body1'  >
                            deepakchacko2700@gmail.com
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display:'flex', 
                            justifyContent:'space-between',
                            columnGap:2
                        }}
                    >
                        <Box sx={{color:'white'}}>
                            <GitHubIcon/>
                        </Box>
                        <Link href='https://github.com/deepakchacko2700'
                            target="_blank" rel="noopener noreferrer"
                            sx={{mt:'4px', color:'#f2f2f2'}}
                        >
                            GitHub Account
                        </Link> 
                    </Box>
                    <Box
                        sx={{
                            display:'flex', 
                            justifyContent:'space-between',
                            columnGap:2
                        }}
                    >
                        <Box sx={{color:'white'}}>
                            <LinkedInIcon />
                        </Box>
                        <Link href='https://www.linkedin.com/in/deepak-chacko-ba2ba7160/'
                            target="_blank" rel="noopener noreferrer"
                            sx={{mt:'4px', color:'#f2f2f2'}}
                        >
                        LinkedIn Account
                        </Link> 
                    </Box>
                </Box>

            </Grid>
        </Grid>
    )
        
}