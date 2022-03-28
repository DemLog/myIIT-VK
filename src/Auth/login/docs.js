import {
    Avatar,
    Box,
    Container,
    Divider, Icon, Link,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText, ListSubheader
} from "@mui/material";

import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import GroupIcon from '@mui/icons-material/Group';
import GitHubIcon from '@mui/icons-material/GitHub';
import {BackHeader} from "../../Components/Header";

export const Terms = (props) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'flex-start',
        }}>
            <BackHeader title="Условия использования" backView={props.back}/>
            <Box sx={{overflowY: 'scroll', mx: 3}}>
                <p align='center'><strong>Правила пользования Сайтом ВКонтакте</strong></p>
                <p> Добро пожаловать на Сайт ВКонтакте, интернет-ресурс, который помогает Вам поддерживать связь с
                    Вашими
                    старыми и новыми друзьями. Сайт ВКонтакте (vk.com) – это сетевой проект, объединяющий людей на
                    основании
                    мест учебы или работы.</p>

                <p> Вы также можете ознакомиться с Правилами защиты информации о пользователях на Сайте VK.com.</p>

                <p> Администрация Сайта предоставляет Вам доступ к использованию Сайта ВКонтакте и его функционала на
                    условиях, являющихся предметом настоящих Правил пользования Сайтом ВКонтакте. В этой связи Вам
                    необходимо внимательно ознакомиться с условиями настоящих Правил, которые рассматриваются
                    Администрацией
                    Сайта как публичная оферта в соответствии со ст. 437 Гражданского кодекса Российской Федерации.</p>


                <p> 1. Термины, используемые в настоящих Правилах</p>

                <p> 1.1. Сайт ВКонтакте (или Сайт) – социальная сеть, известная под именем «ВКонтакте», размещенная на
                    сайте
                    в сети Интернет по адресу: VK.com (включая все уровни указанного домена, как функционирующие на дату
                    принятия Пользователем настоящих Правил, так и запускаемые и вводимые в эксплуатацию в течение всего
                    срока его действия) и доступная Пользователю через сайт, мобильную версию сайта, приложения и иные
                    ресурсы, представляющая собой результат интеллектуальной деятельности в форме программы для ЭВМ.
                    Социальная сеть представлена в объективной форме совокупностью данных и команд, и порождаемых
                    аудиовизуальных отображений (включая входящие в ее состав графические изображения и пользовательский
                    интерфейс), (далее – данные и команды), предназначенных для функционирования ЭВМ и мобильных
                    устройств в
                    целях получения определенного результата в виде организации функционала социальной сети.
                    Совокупность
                    данных и команд состоит из активированных и неактивированных данных и команд.
                    1.2. Неактивированные данные и команды – данные, команды и порождаемые аудиовизуальные отображения,
                    позволяющие увеличить количество виртуальных ценностей, используемых в рамках функциональных
                    возможностей Сайта. Условия предоставления Администрацией Пользователю права на использование
                    неактивированных данных и команд определены в лицензионном соглашении, действующая редакция которого
                    располагается в свободном доступе в сети Интернет по адресу: http://vk.com/licence, заключаемом
                    Администрацией Сайта с Пользователем.</p>


                <p> 2. Статус Правил пользования Сайтом ВКонтакте</p>

                <ul>
                    <li> 2.1. Настоящие Правила пользования Сайтом ВКонтакте (ранее и далее – Правила) разработаны
                        Администрацией
                        Сайта и определяют условия использования и развития Сайта, а также права и обязанности его
                        Пользователей
                        и Администрации. Правила распространяются также на отношения, связанные с правами и интересами
                        третьих
                        лиц, не являющимися Пользователями Сайта, но чьи права и интересы могут быть затронуты в
                        результате
                        действий Пользователей Сайта.
                    </li>
                    <li>2.2. Настоящие Правила являются юридически обязательным соглашением между Пользователем и
                        Администрацией
                        Сайта, предметом которого является предоставление Администрацией Сайта Пользователю доступа к
                        использованию Сайта и его функционала. Помимо настоящих Правил, к соглашению между Пользователем
                        и
                        Администрацией Сайта относятся все специальные документы, регулирующие предоставление доступа к
                        использованию отдельного функционала Сайта (в том числе его неактивированных данных и команд),
                        размещенного в соответствующих разделах Сайта в сети Интернет.
                    </li>
                    <li> 2.3. Пользователь обязан полностью ознакомиться с настоящими Правилами до момента регистрации
                        на Сайте.
                        Регистрация Пользователя на Сайте означает полное и безоговорочное принятие Пользователем
                        настоящих
                        Правил в соответствии со ст. 438 Гражданского кодекса Российской Федерации.
                    </li>
                    <li> 2.4. Настоящие Правила могут быть изменены и/или дополнены Администрацией Сайта в одностороннем
                        порядке
                        без какого-либо специального уведомления. Настоящие Правила являются открытым и общедоступным
                        документом. Действующая редакция Правил располагается в сети Интернет по адресу:
                        http://vk.com/terms.
                        Администрация Сайта рекомендует Пользователям регулярно проверять условия настоящих Правил на
                        предмет их
                        изменения и/или дополнения. Продолжение использования Сайта Пользователем после внесения
                        изменений и/или
                        дополнений в настоящие Правила означает принятие и согласие Пользователя с такими изменениями
                        и/или
                        дополнениями.
                    </li>
                </ul>


                <p> 3. Статус Сайта ВКонтакте</p>

                <p> 3.1. Права на Сайт в целом и на использование сетевого адреса (доменного имени) http://vk.com
                    принадлежат Администрации Сайта. Последняя предоставляет доступ к Сайту всем заинтересованным лицам
                    в
                    соответствии с настоящими Правилами и действующим законодательством Российской Федерации.</p>

                <p> 3.2. Настоящими Правилами установлены условия, в соответствии с которыми права на использование
                    информации и результатов интеллектуальной деятельности (включая, но не ограничиваясь литературными,
                    музыкальными, аудиовизуальными произведениями и фонограммами, произведениями графики и дизайна,
                    фотографическими произведениями, программами для ЭВМ) в составе отдельных разделов Сайта, могут
                    принадлежать Пользователям Сайта и иным лицам, самостоятельно создавшим и/или разместившим указанные
                    объекты на Сайте без непосредственного участия Администрации Сайта.</p>


                <p> 4. Администрация Сайта ВКонтакте</p>

                <p> 4.1. Под Администрацией Сайта ВКонтакте (ранее и далее – Администрация Сайта или Администрация) в
                    настоящих Правилах и иных специальных документах, размещенных на Сайте, понимается Общество с
                    ограниченной ответственностью «В Контакте», юридическое лицо, созданное по законодательству
                    Российской
                    Федерации и зарегистрированное по адресу: 191024, Санкт-Петербург, ул. Херсонская, д. 12-14, литер
                    А,
                    помещение 1-Н.
                    4.2. Обращения, предложения и претензии физических и юридических лиц к Администрации Сайта в связи с
                    настоящими Правилами и всеми вопросами по функционированию Сайта, нарушениями прав и интересов
                    третьих
                    лиц при его использовании, а также для запросов уполномоченных законодательством Российской
                    Федерации
                    лиц могут быть направлены на почтовый адрес ООО «В Контакте», указанный в п. 4.1. настоящих Правил.
                    4.3. В отношении функционирования и развития Сайта Администрация руководствуется законодательством
                    Российской Федерации, настоящими Правилами и иными специальными документами, которые разработаны или
                    могут быть разработаны и приняты Администрацией Сайта в целях регламентации предоставления
                    Пользователям
                    доступа к отдельному функционалу Сайта.
                    4.4. Никакие положения настоящих Правил не предоставляют Пользователю право на использование
                    фирменного
                    наименования, товарных знаков, доменных имен и иных отличительных знаков Администрации Сайта. Право
                    на
                    использование фирменного наименования, товарных знаков, доменных имен и иных отличительных знаков
                    Администрации Сайта может быть предоставлено исключительно по письменному соглашению с
                    Администрацией
                    Сайта.</p>
            </Box>
        </Box>
    )
};

export const About = (props) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'flex-start',
        }}>
            <BackHeader title="О программе" backView={props.back}/>
            <Box sx={{
                overflowY: 'scroll',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'space-between',
            }}>
                <Box>
                    <Box sx={{boxShadow: 2, p: 2}}>
                        myIIT - залупа мамонта, т.к. выпускается уже больше полугода, а результатов - ноль.
                        Ну надеюсь сюда никто не зайдет и я пойду выпилюсь из жизни. Ну а хули?
                        А вообще, кто читает этот текст - гей и я ебал твою мамашку.
                        Геншин хуйня ебаная.
                    </Box>
                    <List sx={{boxShadow: 2, px: 2, mt: 1}}
                          subheader={
                              <ListSubheader component="div" id="nested-list-subheader">Полезные ссылки</ListSubheader>
                          }>
                        <ListItem disablePadding>
                            <ListItemAvatar><Avatar><DeveloperModeIcon/></Avatar></ListItemAvatar>
                            <ListItemText>Создатель: DemLoveSky</ListItemText>
                        </ListItem>
                        <Divider sx={{my: 2}}/>
                        <ListItem disablePadding>
                            <ListItemButton sx={{p: 0}}>
                                <ListItemAvatar><Avatar><GroupIcon/></Avatar></ListItemAvatar>
                                <ListItemText>Группа ВКонтакте</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <Divider sx={{my: 2}}/>
                        <ListItem disablePadding>
                            <ListItemButton sx={{p: 0}}>
                                <ListItemAvatar><Avatar><GroupIcon/></Avatar></ListItemAvatar>
                                <ListItemText>Группа ИИТ ЧелГУ</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <Divider sx={{my: 2}}/>
                        <ListItem disablePadding>
                            <ListItemButton sx={{p: 0}} component="a" href="https://github.com/DemLog">
                                <ListItemAvatar><Avatar><GitHubIcon/></Avatar></ListItemAvatar>
                                <ListItemText>GitHub разработчика</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>

                <List sx={{boxShadow: 3, px: 2}}>
                    <ListItem disablePadding>
                        <ListItemButton sx={{p: 0}}>
                            <ListItemText>Обратная связь с разработчиком</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <Divider sx={{my: 1}}/>
                    <ListItem disablePadding>
                        <ListItemButton sx={{p: 0}}>
                            <ListItemText>Вакансии</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <Divider sx={{my: 1}}/>
                    <ListItem disablePadding>
                        <ListItemButton sx={{p: 0}}>
                            <ListItemText secondary="0.1.0">Версия программы</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
};