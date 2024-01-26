using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using FluentAssertions;
using Moq;
using SnapTrade.Net.Client;
using SnapTrade.Net.Model;
using Xunit;
using Xunit.Abstractions;

namespace SnapTrade.Net.Test
{
    public class MockedTest : IDisposable
    {
        public MockedTest() { }

        [Fact]
        public async Task MockApiStatusCheck()
        {
            ApiResponse<Status> fakeHappyResponse = new ApiResponse<Status>(HttpStatusCode.OK,new Status());

            Mock<Snaptrade> mockSnaptrade = new Mock<Snaptrade>();
            mockSnaptrade
                .Setup(m => m.APIStatus.CheckWithHttpInfoAsync(
                    It.IsAny<int>(),
                    It.IsAny<CancellationToken>()))
                .ReturnsAsync(fakeHappyResponse)
                .Verifiable();

            Snaptrade sut = mockSnaptrade.Object;
            sut.SetClientId("MY_CLIENT_ID");
            sut.SetConsumerKey("MY_CONSUMER_KEY");

            ApiResponse<Status> result
                = await sut.APIStatus.CheckWithHttpInfoAsync(default, default);

            mockSnaptrade.VerifyAll();
            result.Should().NotBeNull();
            result.StatusCode.Should().Be(HttpStatusCode.OK);
        }

        public void Dispose() { }
    }
}