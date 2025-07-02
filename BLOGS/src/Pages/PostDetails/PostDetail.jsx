import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from '../../Components/Posts/PostAuthor'
import Thumbnail from '../../assets/farmThree.jpg'
import './PostDetail.css'

function PostDetail() {
  return (
    <section className="post-detail">
        <div className="container post-detail_container">
          <div className="post-detail_header">
              <PostAuthor />
              <div className="post-detail_buttons">
                <Link to= {`/posts/weeewe/edit`} className='btn_edit'>Edit</Link>
                <Link to= {`/posts/weeewe/delete`} className='btn-sm-primary'>Delete</Link>
              </div>
          </div>

          <h1>This is the post title!</h1>
          <div className="post-detail_thumbnail">
              <img src= {Thumbnail} alt='image' />

            </div>
              <div className='p-content'>          
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus id lectus quis mattis. Nam non lobortis nibh. Maecenas imperdiet iaculis pharetra. Curabitur tellus ligula, sodales eu rutrum eget, venenatis quis ante. Nunc in euismod leo, vitae tincidunt eros. Aliquam vel mi et nulla commodo tincidunt. In non neque ut quam pretium pretium vitae ut nisl. Mauris condimentum mi vitae dui fermentum, eget tempor nunc tincidunt. Donec dignissim elit quis ultrices convallis. Vivamus dignissim felis leo, quis efficitur lacus vehicula ut.

                Phasellus at neque sed libero blandit pulvinar eu non lorem. Cras sit amet tincidunt felis. Quisque ut venenatis erat. Vestibulum ultricies lectus nec ante mattis, in consequat eros blandit. Donec sollicitudin sapien vitae lacinia euismod. Vivamus dapibus metus eget massa placerat, in tincidunt erat rutrum. Nullam a velit efficitur eros ornare accumsan. Vestibulum et nibh ex. Praesent volutpat auctor faucibus. Nam id massa lectus.

                Phasellus fermentum purus a semper rhoncus. Etiam euismod, est at rutrum interdum, ex ligula porta turpis, vel pretium ipsum est consequat orci. Mauris mattis justo et magna euismod, et vestibulum quam aliquam. Aenean vulputate venenatis urna, et aliquet erat ullamcorper in. Nullam nec est in tortor tempor condimentum imperdiet in nibh. Nam vitae justo nisl. Donec id malesuada lectus. Integer venenatis eros vitae posuere commodo.

                Aenean non augue ipsum. Maecenas iaculis suscipit orci, in facilisis mauris tempor non. Praesent sit amet tortor rutrum, sollicitudin tortor ultrices, eleifend mi. Donec ipsum risus, posuere vel maximus a, bibendum nec ligula. Maecenas tincidunt nisi elit, sit amet malesuada neque bibendum vitae. Morbi dapibus convallis nisl sit amet faucibus. Fusce elit sapien, auctor id velit sed, pulvinar elementum nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam vitae tincidunt nisi. Duis eget porttitor est.

                Nullam hendrerit eleifend tristique. Donec id turpis ac risus facilisis sollicitudin eu vitae elit. Phasellus consectetur felis ut magna sagittis, eget fermentum mi venenatis. Phasellus tempus, quam nec varius ultricies, nunc nisi malesuada lectus, in convallis erat nunc id ipsum. Nam sit amet lorem in elit maximus facilisis. Suspendisse consectetur euismod purus, ac facilisis enim posuere eget. Etiam rutrum magna sit amet laoreet egestas. Integer tincidunt euismod est, ac lacinia dui suscipit sit amet. Phasellus id accumsan leo. Morbi vel tempus enim. Nullam in sapien elit. Sed quis lectus in sem semper euismod. Donec interdum sed augue sed maximus. Sed et metus justo.
              
              </p> <br />

                  <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus id lectus quis mattis. Nam non lobortis nibh. Maecenas imperdiet iaculis pharetra. Curabitur tellus ligula, sodales eu rutrum eget, venenatis quis ante. Nunc in euismod leo, vitae tincidunt eros. Aliquam vel mi et nulla commodo tincidunt. In non neque ut quam pretium pretium vitae ut nisl. Mauris condimentum mi vitae dui fermentum, eget tempor nunc tincidunt. Donec dignissim elit quis ultrices convallis. Vivamus dignissim felis leo, quis efficitur lacus vehicula ut.

                Phasellus at neque sed libero blandit pulvinar eu non lorem. Cras sit amet tincidunt felis. Quisque ut venenatis erat. Vestibulum ultricies lectus nec ante mattis, in consequat eros blandit. Donec sollicitudin sapien vitae lacinia euismod. Vivamus dapibus metus eget massa placerat, in tincidunt erat rutrum. Nullam a velit efficitur eros ornare accumsan. Vestibulum et nibh ex. Praesent volutpat auctor faucibus. Nam id massa lectus.

                Phasellus fermentum purus a semper rhoncus. Etiam euismod, est at rutrum interdum, ex ligula porta turpis, vel pretium ipsum est consequat orci. Mauris mattis justo et magna euismod, et vestibulum quam aliquam. Aenean vulputate venenatis urna, et aliquet erat ullamcorper in. Nullam nec est in tortor tempor condimentum imperdiet in nibh. Nam vitae justo nisl. Donec id malesuada lectus. Integer venenatis eros vitae posuere commodo.

                Aenean non augue ipsum. Maecenas iaculis suscipit orci, in facilisis mauris tempor non. Praesent sit amet tortor rutrum, sollicitudin tortor ultrices, eleifend mi. Donec ipsum risus, posuere vel maximus a, bibendum nec ligula. Maecenas tincidunt nisi elit, sit amet malesuada neque bibendum vitae. Morbi dapibus convallis nisl sit amet faucibus. Fusce elit sapien, auctor id velit sed, pulvinar elementum nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam vitae tincidunt nisi. Duis eget porttitor est.

                Nullam hendrerit eleifend tristique. Donec id turpis ac risus facilisis sollicitudin eu vitae elit. Phasellus consectetur felis ut magna sagittis, eget fermentum mi venenatis. Phasellus tempus, quam nec varius ultricies, nunc nisi malesuada lectus, in convallis erat nunc id ipsum. Nam sit amet lorem in elit maximus facilisis. Suspendisse consectetur euismod purus, ac facilisis enim posuere eget. Etiam rutrum magna sit amet laoreet egestas. Integer tincidunt euismod est, ac lacinia dui suscipit sit amet. Phasellus id accumsan leo. Morbi vel tempus enim. Nullam in sapien elit. Sed quis lectus in sem semper euismod. Donec interdum sed augue sed maximus. Sed et metus justo.
              
              </p> <br />

                  <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus id lectus quis mattis. Nam non lobortis nibh. Maecenas imperdiet iaculis pharetra. Curabitur tellus ligula, sodales eu rutrum eget, venenatis quis ante. Nunc in euismod leo, vitae tincidunt eros. Aliquam vel mi et nulla commodo tincidunt. In non neque ut quam pretium pretium vitae ut nisl. Mauris condimentum mi vitae dui fermentum, eget tempor nunc tincidunt. Donec dignissim elit quis ultrices convallis. Vivamus dignissim felis leo, quis efficitur lacus vehicula ut.

                Phasellus at neque sed libero blandit pulvinar eu non lorem. Cras sit amet tincidunt felis. Quisque ut venenatis erat. Vestibulum ultricies lectus nec ante mattis, in consequat eros blandit. Donec sollicitudin sapien vitae lacinia euismod. Vivamus dapibus metus eget massa placerat, in tincidunt erat rutrum. Nullam a velit efficitur eros ornare accumsan. Vestibulum et nibh ex. Praesent volutpat auctor faucibus. Nam id massa lectus.

                Phasellus fermentum purus a semper rhoncus. Etiam euismod, est at rutrum interdum, ex ligula porta turpis, vel pretium ipsum est consequat orci. Mauris mattis justo et magna euismod, et vestibulum quam aliquam. Aenean vulputate venenatis urna, et aliquet erat ullamcorper in. Nullam nec est in tortor tempor condimentum imperdiet in nibh. Nam vitae justo nisl. Donec id malesuada lectus. Integer venenatis eros vitae posuere commodo.

                Aenean non augue ipsum. Maecenas iaculis suscipit orci, in facilisis mauris tempor non. Praesent sit amet tortor rutrum, sollicitudin tortor ultrices, eleifend mi. Donec ipsum risus, posuere vel maximus a, bibendum nec ligula. Maecenas tincidunt nisi elit, sit amet malesuada neque bibendum vitae. Morbi dapibus convallis nisl sit amet faucibus. Fusce elit sapien, auctor id velit sed, pulvinar elementum nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam vitae tincidunt nisi. Duis eget porttitor est.

                Nullam hendrerit eleifend tristique. Donec id turpis ac risus facilisis sollicitudin eu vitae elit. Phasellus consectetur felis ut magna sagittis, eget fermentum mi venenatis. Phasellus tempus, quam nec varius ultricies, nunc nisi malesuada lectus, in convallis erat nunc id ipsum. Nam sit amet lorem in elit maximus facilisis. Suspendisse consectetur euismod purus, ac facilisis enim posuere eget. Etiam rutrum magna sit amet laoreet egestas. Integer tincidunt euismod est, ac lacinia dui suscipit sit amet. Phasellus id accumsan leo. Morbi vel tempus enim. Nullam in sapien elit. Sed quis lectus in sem semper euismod. Donec interdum sed augue sed maximus. Sed et metus justo.
              
              </p> <br />

               <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus euismod dolor <br></br> a egestas. Pellentesque auctor egestas mi, ut lacinia risus auctor eget. Suspendisse nisi justo, <br></br>rhoncus vitae vehicula at, tincidunt ac elit. Nunc sed sem ut felis ornare varius. Praesent rutrum quis libero sed efficitur. <br></br>Praesent sit amet ex vel elit gravida fringilla ac vitae lectus. Integer orci justo, pharetra in lectus sit amet, <br></br>scelerisque congue velit. Vivamus arcu enim, dapibus eu arcu vitae, congue malesuada arcu.<br></br> Nulla aliquet dui et facilisis placerat.

                In lobortis commodo aliquam. Aliquam sit amet est sit amet erat sodales ultricies sit amet <br></br> et ex. Nam ac fringilla felis. Cras congue elit id urna tempor euismod vel at ante. Ut a ex luctus, sodales dolor a,<br></br> viverra enim. Fusce eget nibh nulla. Donec metus erat, vulputate at ex ut, consectetur hendrerit tortor. Aenean pulvinar<br></br> neque ac feugiat ornare. Proin ut dui nec felis sagittis egestas. Donec vehicula leo et consequat eleifend. <br></br>Mauris tortor sem, volutpat sit amet magna non, viverra rutrum purus. Sed suscipit erat dapibus,<br></br> varius tortor ut, euismod nisl. Nulla tincidunt aliquet nunc, a consectetur justo vehicula non.<br></br> Duis tellus dui, egestas eu scelerisque non, pharetra eu neque.

                Praesent ultrices posuere ipsum et pellentesque. Phasellus erat libero, bibendum et <br></br> mollis ac, dapibus ac diam. Nunc nisl massa, molestie non pulvinar sit amet, convallis non purus. Ut pulvinar tortor ut imperdiet ultricies.<br></br> Suspendisse eget lorem gravida, convallis arcu commodo, condimentum lacus. Aenean id iaculis ante. <br></br>Suspendisse volutpat eu dolor vitae iaculis. Nulla condimentum malesuada aliquam. Praesent tempor felis eu nunc porta <br></br>efficitur. Pellentesque lacinia ipsum vel lorem rutrum tincidunt.

                Ut malesuada eros tortor, eu fermentum sem viverra non. Nullam ac euismod eros, ac vestibulum eros.<br></br> Donec aliquet quam odio, vitae ultrices odio dictum in. Suspendisse commodo rhoncus diam nec tincidunt. Curabitur a auctor elit.<br></br> Donec at felis et lectus gravida suscipit. Duis quis libero diam. Fusce iaculis est sit amet nisi tristique<br></br> ornare vitae quis nunc. Vestibulum gravida euismod lectus, nec tempus augue tincidunt quis. Nam in porta augue.<br></br> Duis ligula velit, varius id faucibus eu, ultrices quis nunc.<br></br> Fusce aliquam a dolor sed fermentum.

                Curabitur vel volutpat nibh. Nulla egestas, eros vel malesuada tempus, arcu lectus tempor massa,<br></br> iaculis auctor sem sapien ultricies magna. Nam volutpat odio et dictum imperdiet. Integer dolor massa, blandit quis feugiat vitae, <br></br>faucibus non ligula. Sed dapibus massa mattis, rhoncus orci sit amet, pretium dui. Ut lacinia, dui sit amet<br></br> posuere dignissim, neque est cursus dui, ut porta sem felis et mauris. Vestibulum velit nulla, <br></br>vehicula fringilla lorem vitae, semper consequat justo.
              </p>

               <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus euismod dolor <br></br> a egestas. Pellentesque auctor egestas mi, ut lacinia risus auctor eget. Suspendisse nisi justo, <br></br>rhoncus vitae vehicula at, tincidunt ac elit. Nunc sed sem ut felis ornare varius. Praesent rutrum quis libero sed efficitur. <br></br>Praesent sit amet ex vel elit gravida fringilla ac vitae lectus. Integer orci justo, pharetra in lectus sit amet, <br></br>scelerisque congue velit. Vivamus arcu enim, dapibus eu arcu vitae, congue malesuada arcu.<br></br> Nulla aliquet dui et facilisis placerat.

                In lobortis commodo aliquam. Aliquam sit amet est sit amet erat sodales ultricies sit amet <br></br> et ex. Nam ac fringilla felis. Cras congue elit id urna tempor euismod vel at ante. Ut a ex luctus, sodales dolor a,<br></br> viverra enim. Fusce eget nibh nulla. Donec metus erat, vulputate at ex ut, consectetur hendrerit tortor. Aenean pulvinar<br></br> neque ac feugiat ornare. Proin ut dui nec felis sagittis egestas. Donec vehicula leo et consequat eleifend. <br></br>Mauris tortor sem, volutpat sit amet magna non, viverra rutrum purus. Sed suscipit erat dapibus,<br></br> varius tortor ut, euismod nisl. Nulla tincidunt aliquet nunc, a consectetur justo vehicula non.<br></br> Duis tellus dui, egestas eu scelerisque non, pharetra eu neque.

                Praesent ultrices posuere ipsum et pellentesque. Phasellus erat libero, bibendum et <br></br> mollis ac, dapibus ac diam. Nunc nisl massa, molestie non pulvinar sit amet, convallis non purus. Ut pulvinar tortor ut imperdiet ultricies.<br></br> Suspendisse eget lorem gravida, convallis arcu commodo, condimentum lacus. Aenean id iaculis ante. <br></br>Suspendisse volutpat eu dolor vitae iaculis. Nulla condimentum malesuada aliquam. Praesent tempor felis eu nunc porta <br></br>efficitur. Pellentesque lacinia ipsum vel lorem rutrum tincidunt.

                Ut malesuada eros tortor, eu fermentum sem viverra non. Nullam ac euismod eros, ac vestibulum eros.<br></br> Donec aliquet quam odio, vitae ultrices odio dictum in. Suspendisse commodo rhoncus diam nec tincidunt. Curabitur a auctor elit.<br></br> Donec at felis et lectus gravida suscipit. Duis quis libero diam. Fusce iaculis est sit amet nisi tristique<br></br> ornare vitae quis nunc. Vestibulum gravida euismod lectus, nec tempus augue tincidunt quis. Nam in porta augue.<br></br> Duis ligula velit, varius id faucibus eu, ultrices quis nunc.<br></br> Fusce aliquam a dolor sed fermentum.

                Curabitur vel volutpat nibh. Nulla egestas, eros vel malesuada tempus, arcu lectus tempor massa,<br></br> iaculis auctor sem sapien ultricies magna. Nam volutpat odio et dictum imperdiet. Integer dolor massa, blandit quis feugiat vitae, <br></br>faucibus non ligula. Sed dapibus massa mattis, rhoncus orci sit amet, pretium dui. Ut lacinia, dui sit amet<br></br> posuere dignissim, neque est cursus dui, ut porta sem felis et mauris. Vestibulum velit nulla, <br></br>vehicula fringilla lorem vitae, semper consequat justo.
              </p>
          </div>
        </div>
    </section>
  )
}

export default PostDetail