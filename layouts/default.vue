<template>
    <ClientOnly>
        <div class="flex flex-col min-h-screen bg-[#f9fafb]">
            <navbar/>
            
            <Transition name="page" mode="out-in">
                <main class="flex-grow">
                    <slot />
                </main>
            </Transition>
            <FooterSection/>
        </div>
    </ClientOnly>
    
</template>

<style>


</style>