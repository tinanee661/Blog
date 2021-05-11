<template>
    <div>
        <UserProfileHeader
            :user="user"
            :auth-user="authUser"
        />
        <div class="ui stackable grid container">
            <div class="four wide column">
                <UserProfileSidebarDetails :user="user"/>
            </div>
            <div class="eight wide column">
                <div class="ui segment">
                    <h2 class="ui medium dividing header">Tweets</h2>

                    <Tweets
                        :tweets.sync="tweets"
                        :auth-user="authUser"
                    />
                </div>
            </div>
            <div class="four wide column">
                <WhoToFollow v-if="isLoggedIn"/>
            </div>
        </div>
    </div>
</template>