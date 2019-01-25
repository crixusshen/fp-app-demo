<template>
    <div class="container">
        <!-- 日历部分 -->
        <section class="calender bg-white">
            <header>
                <span class="arrow-left" @click="previousDate"></span>
                <span class="title">{{completeDate}}</span>
                <span class="arrow-right" @click="nextDate"></span>
            </header>

            <fp-scroll :data="currentMonthData" direction="horizontal" class="horizontal-scroll-list-wrap">
                <div class="calender-container">
                    <!--<section class="date-unit"></section>-->
                    <!--<section class="date-unit"></section>-->
                    <!--<section class="date-unit"></section>-->
                    <section
                            v-for="item in currentMonthData"
                            class="date-unit"
                            v-bind:class="item.className"
                    >
                        <p>{{ "周" + dayMap[item.day]}}</p>
                        <article @click="selectDate(item)">
                            <div>{{item.today ? "今" : item.date}}</div>
                        </article>
                    </section>
                    <!--<section class="date-unit"></section>-->
                    <!--<section class="date-unit"></section>-->
                    <!--<section class="date-unit"></section>-->

                </div>
            </fp-scroll>

        </section>
        <!-- tab 头部  -->
        <section class="tab bg-white">
            <div v-for="(text,index) in nationTabText"
                 :class="{active:nationTabSelect[index]}"
                 @click="toggleTab(index)"
            >

                {{text}}
            </div>

        </section>

        <!--新股申购-->
        <section class="list-block bg-white">
            <header class="list-block-header">新股申购</header>
            <article class="list-block-content">
                <header class="content-header">
                    <section>名称代码</section>
                    <section>占总股本比例</section>
                    <section>发行量(股)</section>
                    <section>最新收盘价</section>
                </header>

                <ul class="content-body">

                    <li v-for="item of getIPO">
                        <section class="stock-block">
                            <section>
                                <header>{{item.name}}</header>
                                <p>{{item.code}}</p>
                            </section>
                        </section>
                        <section :class="{grey:!item.totalPer}">
                            {{item.totalPer ? item.totalPer : "未公布"}}
                        </section>
                        <section>{{item.circulation}}</section>
                        <section>{{item.close}}</section>
                    </li>
                </ul>
            </article>
        </section>


        <!--停牌复牌-->
        <section class="list-block bg-white">
            <header class="list-block-header">停牌复牌</header>
            <article class="list-block-content">
                <header class="content-header">
                    <section>名称代码</section>
                    <section>停牌时间</section>
                    <section>停牌原因</section>
                </header>
                <ul class="content-body">
                    <li>
                        <section class="stock-block">
                            <section>
                                <header>汉嘉设计</header>
                                <p>002943</p>
                            </section>
                        </section>
                        <section>9:30</section>
                        <section>刊登重要公告</section>
                    </li>
                    <li>
                        <section class="stock-block">
                            <section>
                                <header>中国动力</header>
                                <p>300746</p>
                            </section>
                        </section>
                        <section>9:30</section>
                        <section>重大资产重组</section>
                    </li>
                </ul>
            </article>
        </section>

        <!--限售解禁-->
        <section class="list-block bg-white">
            <header class="list-block-header">限售解禁</header>
            <article class="list-block-content">
                <header class="content-header">
                    <section>名称代码</section>
                    <section>占股本比例</section>
                    <section>数量</section>
                </header>
                <ul class="content-body">
                    <li>
                        <section class="stock-block">
                            <section>
                                <header>宇晶股份</header>
                                <p>002943</p>
                            </section>
                        </section>
                        <section>9:30</section>
                        <section>0.44亿</section>
                    </li>
                    <li>
                        <section class="stock-block">
                            <section>
                                <header>万科A</header>
                                <p>300746</p>
                            </section>
                        </section>
                        <section>9:30</section>
                        <section>2.35亿</section>
                    </li>
                </ul>
            </article>
        </section>

        <!--重大事件-->
        <section class="list-block bg-white">
            <header class="list-block-header">限售解禁</header>
            <ul class="hit">
                <li>
                    <header class="title">2018中德高端制造峰会将于12月1日举行</header>
                    <article class="content">
                        12月1日，“2018中得高端制造峰会”将在绍兴举行，此次峰会将邀请中德知名学者、主流制造业企业代表、…
                    </article>
                    <div class="tag">
                        <span class="type">物联网</span>
                        <span>劲佳股份</span>
                        <span>金卡智能</span>
                        <span>亿伟锂平</span>
                    </div>
                </li>
                <li>
                    <header class="title">2018中德高端制造峰会将于12月1日举行</header>
                    <article class="content">
                        12月1日，“2018中得高端制造峰会”将在绍兴举行，此次峰会将邀请中德知名学者、主流制造业企业代表、…
                    </article>
                    <div class="tag">
                        <span class="type">股权转让</span>
                        <span>合力泰</span>
                        <span>克明面业</span>
                        <span>山西汾酒</span>
                    </div>
                </li>
            </ul>
        </section>

        <!--重大合同-->
        <section class="list-block bg-white m-b-0">
            <header class="list-block-header">重大合同</header>
            <article class="list-block-content">
                <header class="content-header">
                    <section>名称代码</section>
                    <section>停牌时间</section>
                    <section>占上年营收</section>
                </header>
                <ul class="content-body">
                    <li>
                        <section class="stock-block">
                            <section>
                                <header>宇晶股份</header>
                                <p>002943</p>
                            </section>
                        </section>
                        <section>99.52亿</section>
                        <section>447.17%</section>
                    </li>
                    <li>
                        <section class="stock-block">
                            <section>
                                <header>安可防备</header>
                                <p>300746</p>
                            </section>
                        </section>
                        <section>46.87亿</section>
                        <section>2.35亿</section>
                    </li>
                    <li>
                        <section class="stock-block">
                            <section>
                                <header>中国动力</header>
                                <p>300746</p>
                            </section>
                        </section>
                        <section>46.87亿</section>
                        <section>265.61亿</section>
                    </li>
                </ul>
            </article>
        </section>

        <!--footer-->
        <footer class="bg-white">
            <p>◎东方证券免责声明：</p>
            <p> 本资讯由恒生聚源智能小梵提供，仅供参考，不作为投资依据！</p>
        </footer>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                nationTabText: ["国内", "国际"],
                nationTabSelect: [true, false],
                dayMap: ["日", "一", "二", "三", "四", "五", "六"],
                selectedDate: this.dateToArr(),
                IPO: [
                    [
                        {
                            name: "汉嘉设计",
                            code: "002943",
                            totalPer: "16.79元",
                            circulation: "2104万",
                            close: "2.1万"
                        },
                        {
                            name: "万 科Ａ",
                            code: "000002",
                            totalPer: null,
                            circulation: "431万",
                            close: "2.2万"
                        },
                        {
                            name: "浦发银行",
                            code: "600000",
                            totalPer: null,
                            circulation: "8342万",
                            close: "4.0万"
                        },
                    ],
                    [
                        {
                            name: "网宿科技",
                            code: "300017",
                            totalPer: "21.79元",
                            circulation: "654万",
                            close: "2.7万"
                        },
                        {
                            name: "中原高速",
                            code: "600020",
                            totalPer: "123元",
                            circulation: "4321万",
                            close: "9.1万"
                        },
                        {
                            name: "华夏银行",
                            code: "600015",
                            totalPer: null,
                            circulation: "1231万",
                            close: "3.0万"
                        },
                    ],
                ]

            }
        },
        computed: {
            getIPO() {
                return this.IPO.find((_, index) => {
                    return this.nationTabSelect[index]
                })
            },
            completeDate() {
                const [year, month, day] = this.selectedDate;
                return year + "年" + month + "月" + day + "日";
            },
            currentMonthData() {
                const result = [];
                // 判断相对于年
                // 判断相对于月
                // 判断相当于今天
                const today = new Date().getDate();
                const [year, month] = this.selectedDate;
                for (let i = 1; i <= this.getCountOfDayInMonth(year, month); i++) {
                    result.push({
                        year,
                        month,
                        day: new Date(year, month, i).getDay(),
                        date: i,
                        today: today === i,
                        className: {
                            before: today > i,
                            today: today === i,
                            after: today < i,
                            selected: this.selectedDate.toString() === [year, month, i].toString()
                        },
                    })
                }
                return result
            },
            dateScrollerWidth() {
                const [year, month] = this.selectedDate;
                return {
                    // 整屏能显示7个
                    width: (this.getCountOfDayInMonth(year, month) + 6) * 100 / 7 + "vw"
                }
            }
        },

        methods: {
            toggleTab(index) {
                const length = this.nationTabSelect.length;
                const result = Array(length).fill(false);
                result[index] = true;
                this.nationTabSelect = result;
            },
            dateToArr(date = new Date()) {
                return [date.getFullYear(), date.getMonth() + 1, date.getDate()]
            },
            getCountOfDayInMonth(year, month) {
                return new Date(year, month, -1).getDate();
            },
            selectDate({year, month, date}) {
                this.selectedDate = [year, month, date]
            },
            nextDate() {
                const [year, month, date] = this.selectedDate;
                const total = this.getCountOfDayInMonth(year, month);
                this.selectedDate = [year, month, date + 1 > total ? total : date + 1]
            },
            previousDate() {
                const [year, month, date] = this.selectedDate;
                this.selectedDate = [year, month, date - 1 || 1]
            }
        },
        watch: {
            nationTabSelect(latest, previous) {
                console.log(latest, previous)
            }
        }


    };
</script>

<style lang="scss" scoped>
    .bg-white {
        background: white;
    }

    .m-b-0 {
        margin-bottom: 0 !important;
    }

    .grey {
        color: #C8C8C8;
    }

    .text-l {
        text-align: left;
    }

    .text-r {
        text-align: right;
    }

    .text-c {
        text-align: center;
    }

    .container {
        min-height: 100vh;
        background: #f5f5f5;
    }

    .arrow-left {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-top: #bbb solid 2px;
        border-left: #bbb solid 2px;
        transform: rotate(-45deg);
    }

    .arrow-right {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-top: #bbb solid 2px;
        border-right: #bbb solid 2px;
        transform: rotate(45deg);
    }

    .calender {
        /*height: 30vw;*/
        padding: 5vw 0;
        margin-bottom: 4vw;

        header {
            display: flex;
            margin-bottom: 4vw;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: 4vw;
            height: 5vw;
            line-height: 5vw;

            .title {
                padding: 0 2vw;
            }

        }

        .calender-scroller {
            display: flex;
            width: 100vw;
            overflow-x: scroll;
        }

        .horizontal-scroll-list-wrap /deep/ .cube-scroll-content { display: inline-block;}

        .calender-container {
            display: flex;
            // width: 12 * (100vw / 7);
        }

        .date-unit {
            text-align: center;
            width: (100vw/7);
            font-size: 5vw;
            flex-shrink: 0;

            p {
                font-size: 3vw
            }

            article {
                display: flex;
                justify-content: center;
                align-items: center;

                height: (100vw/7);
            }

            &.today {
                article {
                    /*color: #F80706;*/
                    font-weight: bold;
                }
            }

            &.before {
                article {
                    color: #999999;
                    font-weight: bold;
                }
            }

            &.after {
                article {
                    font-weight: bold;
                }
            }

            &.selected {
                article {
                    color: white;
                    padding: 2vw;

                    div {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        background: #F80706;
                    }
                }

            }
        }


    }

    .tab {
        display: flex;
        padding: 3vw 0 0;
        /*height: 15vw;*/
        margin: 0;
        justify-content: center;
        /*align-items: center;*/
        font-size: 4vw;

        & > * {
            &.active {
                z-index: 10;
                color: #ea1317;
                border-color: #ea1317;
                background: #fffbfb;
            }

            color: #a6a6a6;
            text-align: center;
            width: 25vw;
            height: 8vw;
            line-height: 8vw;
            border: 1px solid #a6a6a6;

            &:first-child {
                border-top-left-radius: 0.8vw;
                border-bottom-left-radius: 0.8vw;
            }

            &:last-child {
                margin-left: -1px;
                border-top-right-radius: 0.8vw;
                border-bottom-right-radius: 0.8vw;
            }
        }
    }

    .list-block {
        margin-bottom: 4vw;
    }

    .list-block-header {
        height: 13vw;
        line-height: 13vw;
        padding: 0 0 0 3vw;
        font-size: 5vw;
        font-weight: bold;
    }

    @mixin list-common {
        flex: 1;
        text-align: center;
        &:first-child {
            text-align: left;
            padding-left: 3vw;
        }
        &:last-child {
            text-align: right;
            padding-right: 3vw;
        }
    }

    .content-header {
        display: flex;
        line-height: 10vw;
        height: 10vw;
        background: #fcfcfc;

        & > * {
            font-size: 3.5vw;
            @include list-common;
        }
    }

    ul.content-body > li {
        display: flex;

        & > * {
            font-size: 4.5vw;
            height: 13vw;
            line-height: 13vw;
            border-bottom: 1px solid #EFEFEF;
            @include list-common;

            &.stock-block {
                display: flex;
                align-items: center;
                line-height: initial;

                header {
                    font-size: 4vw;
                    padding: 0 0 1vw;
                }

                p {
                    font-size: 3.5vw;
                    font-weight: initial;
                    color: #A4A5A5;
                }
            }

        }
    }

    .hit {
        @mixin padding {
            padding: 0 3vw;
        }

        & > * {
            padding: 2vw 0;
            border-bottom: 1px solid #EFEFEF;

            .title {
                @include padding;
                padding-bottom: 2vw;
                font-size: 4vw;
            }

            .content {
                @include padding;
                padding-bottom: 2vw;
                font-size: 4vw;
                color: #595959;
            }

            .tag {
                @include padding;
                font-size: 3vw;
                display: inline-flex;
                align-items: center;

                & > * {
                    margin-right: 1vw;
                    color: #A2A2A2;
                }

                .type {
                    padding: 0.3vw 1vw;
                    border-radius: 0.8vw;
                    border: 1px solid #5693E1;
                    color: #5693E1;
                }
            }
        }
    }

    footer {
        text-align: center;
        padding: 6vw;
        color: #B5BBC1;

        & > * {
            padding-top: 1vw;
        }
    }


</style>
