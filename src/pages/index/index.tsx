import {Text, View} from "@tarojs/components";
import './index.css'

export default function Index() {

    return (
        <View className='index'>
            <View className='index-top'>
                <View className='index-input'>
                    <Text>查询</Text>
                </View>
            </View>
            <View className='index-bottom'>
                <View className='first-text'>附近的公交站</View>
                <View className='bus'>
                    <View className='bus-sec'>
                        <Text className='bus-sec-name'>沛县支路</Text>
                        <Text className='bus-sec-distance'>120m</Text>
                    </View>
                    <View className='bus-name'>
                        <Text>319路</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

